import { WebSocketGateway, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, WebSocket, RawData } from 'ws';
import { ChatService } from './chat.service';
import { dentroHorario } from '../utils/timeUtils';
import { logError } from '../utils/logger';

interface JwtUserPayload {
  id: number;
  nivel: number;
  nome?: string;
  email?: string;
}

interface UserData {
  ws: WebSocket;
  nome: string;
  lastActivity: number;
  lastMessageAt?: number;
}

interface AuthWebSocket extends WebSocket {
  userData?: JwtUserPayload;
}

interface ChatMessage {
  userId: number;
  fromUserId: number;
  nome: string;
  text: string;
  timestamp: string;
}

interface IncomingMessage {
  type: 'connect' | 'message';
  token?: string;
  nome?: string;
  text?: string;
  to?: number;
}

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly chatService: ChatService) { }

  @WebSocketServer()
  server: Server;

  handleConnection(ws: AuthWebSocket) {
    let role: 'agent' | 'user' | null = null;
    let currentId: number | null = null;

    ws.on('message', (msg: RawData) => {
      let data: IncomingMessage;
      const message = msg.toString();

      try {
        data = JSON.parse(message);
      } catch (parseErr: any) {
        logError({
          message: 'Mensagem JSON malformada recebida.',
          userId: currentId,
          chatId: null,
          stack: parseErr.stack,
        });

        this.chatService.send(ws, { error: 'Mensagem inválida' });
        return;
      }

      try {
        if (data.type === 'connect') {
          let decoded: JwtUserPayload;

          if (ws.userData) {
           decoded = ws.userData;
          } else {
            decoded = this.chatService.verifyToken(data.token);
            if (!decoded) {
              ws.close(4002, 'Token inválido');
              return;
            }
          }

          const roleMap: Record<number, 'agent' | 'user'> = {
            0: 'agent',
            1: 'user',
          };

          const role = roleMap[decoded.nivel];

          if (!role) {
            ws.close(4003, 'Role inválido');
            return;
          }
          currentId = decoded.id;

          const nomeUsuario =
            decoded.nome ||
            data.nome ||
            decoded.email ||
            `Usuario ${currentId}`;

          if (role === 'user') {
            this.chatService.users[currentId] = {
              ws,
              nome: nomeUsuario,
              lastActivity: Date.now(),
            };

            if (!this.chatService.history[currentId]) {
              this.chatService.history[currentId] = [];
            }

            this.chatService.updateUserActivity(currentId);

            this.chatService.send(ws, {
              type: 'status',
              msg: `✅ Conectado como ${nomeUsuario}`,
            });

            this.chatService.send(ws, {
              type: 'history',
              messages: this.chatService.history[currentId],
            });

            this.chatService.broadcastAgents({
              type: 'status',
              msg: `${nomeUsuario} entrou no chat.`,
            });
          }

          if (role === 'agent') {
            this.chatService.agents[currentId] = ws;

            this.chatService.send(ws, {
              type: 'status',
              msg: 'Conectado como atendente.',
            });

            Object.entries(this.chatService.users).forEach(
              ([userId, userData]) => {
                this.chatService.send(ws, {
                  type: 'history',
                  userId,
                  nome: userData.nome,
                  messages: this.chatService.history[userId],
                });
              },
            );
          }
        }

        if (data.type === 'message') {
          if (typeof data.text !== 'string' || data.text.trim() === '') {
            this.chatService.send(ws, {
              type: 'error',
              msg: 'Mensagem inválida',
            });
            return;
          }

          let newMsg: ChatMessage;

          if (role === 'user') {

            if (!currentId) return;

            const nomeUsuario = this.chatService.users[currentId].nome;

            newMsg = {
              userId: currentId,
              fromUserId: currentId,
              nome: nomeUsuario,
              text: data.text,
              timestamp: new Date().toISOString(),
            };

            this.chatService.addMessageToHistory(currentId, newMsg);

            this.chatService.broadcastAgents({
              type: 'message',
              userId: currentId,
              nome: nomeUsuario,
              text: newMsg.text,
              timestamp: newMsg.timestamp,
            });
          }

          if (role === 'agent') {

            if (!currentId) return;

            const targetUser = data.to;

            if (!this.chatService.users[targetUser]) {
              this.chatService.send(ws, {
                type: 'status',
                msg: `Usuário ${targetUser} não está online.`,
              });
              return;
            }

            newMsg = {
              userId: currentId,
              fromUserId: currentId,
              nome: 'Atendente',
              text: data.text,
              timestamp: new Date().toISOString(),
            };

            this.chatService.addMessageToHistory(targetUser, newMsg);

            this.chatService.send(
              this.chatService.users[targetUser].ws,
              {
                type: 'message',
                text: newMsg.text,
                timestamp: newMsg.timestamp,
              },
            );
          }
        }
      } catch (err: any) {
        logError({
          message: 'Erro no processamento da mensagem.',
          userId: currentId,
          chatId: null,
          stack: err.stack,
        });
      }
    });
  }

  handleDisconnect(ws: AuthWebSocket) {

    const agentEntry = Object.entries(this.chatService.agents)
    .find(([_, socket]) => socket === ws);

    if (agentEntry) {
      const [agentId] = agentEntry;
      delete this.chatService.agents[agentId];
      return;
    }

    const userEntry = Object.entries(this.chatService.users)
    .find(([_, data]) => data.ws === ws);

    if (userEntry) {
      const [userId] = userEntry
      this.chatService.endUserSession(Number(userId), 'disconnect');
    }
  }
}