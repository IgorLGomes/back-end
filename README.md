<<<<<<< HEAD
# Back-end

# Guia de Contribuição

Este documento descreve o fluxo de trabalho adotado neste repositório. Siga as etapas abaixo para contribuir de forma organizada.

---

## Estrutura de Branches

```
main
└── develop
      ├── chore/                        ← tarefas técnicas globais
      └── release/entrega-DD-MM         ← entrega do período
              └── short-release/produto ← escopo do produto
                      └── {issue}-{descricao}  ← sua branch (criada pela issue)
```

---

## Passo a Passo

### 1. Encontre sua Issue

Acesse a aba **Issues** do repositório e filtre por `assignee:@me` para ver as issues atribuídas a você.

---

### 2. Leia e analise a tarefa

Antes de começar, leia a issue com atenção e entenda o que precisa ser feito.

---

### 3. Crie a branch pela própria Issue

No painel lateral direito da issue, clique em **"Create a branch"** na seção **Development**.

> **Deixe o nome ser gerado automaticamente** — ele já vem no formato correto baseado no título da issue (ex: `10-feature-preparar-a-seed-para-popular-o-bd`).

**Escolha a origem correta:**

| Repositório | Branch de origem |
|---|---|
| **Back-end** | `short-release/seu-produto` |
| **Database** | `develop` |

Selecione a branch de origem no campo **"Branch source"** e clique em **"Create branch"**.

---

### 4. Faça checkout na branch criada

Após criar, o GitHub mostra o comando. Você pode usar:

```bash
git fetch origin
git checkout nome-da-branch-criada
```

Ou pelo **VSCode** (aba Source Control → trocar branch) ou pelo **GitHub Desktop**.

---

### 5. Desenvolva e commite

Faça seu trabalho e commite seguindo o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git add .
git commit -m "feat: descrição do que foi feito"
git push origin nome-da-sua-branch
```

| Prefixo | Uso |
|---|---|
| `feat:` | Nova funcionalidade |
| `fix:` | Correção de bug |
| `chore:` | Tarefa técnica sem impacto funcional |
| `docs:` | Documentação |
| `refactor:` | Refatoração sem mudança de comportamento |
| `test:` | Adição ou ajuste de testes |
| `ci:` | Configuração de CI/CD |

---

### 6. Abra o Pull Request

Na aba **Pull Requests**, clique em **New pull request** e configure:

| Campo | Valor |
|---|---|
| **base** (esquerda) | branch pai (`short-release/seu-produto``) |
| **compare** (direita) | sua branch |

**No corpo do PR:**
- Descreva com detalhes o que foi feito
- Referencie a issue com `closes #numero` para fechá-la automaticamente

**No painel lateral:**
- Solicite a review do seu **PO ou PM** na aba **Reviewers**

---

## Fluxo de Merges

```
sua branch  →  short-release/produto  →  release/entrega-DD-MM  →  develop  →  main
```
```
chore/      →  develop  →  main
```

> O merge entre os níveis acima é responsabilidade do **PO/PM** de cada produto. Sua responsabilidade é abrir o PR da sua branch para a `short-release` do seu produto.

---

## Regras Gerais

- **Nunca faça push direto** em `main`, `develop`, `release/*` ou `short-release/*`
- **Todo merge** deve ser feito via Pull Request com ao menos **1 aprovação**
- **Sempre crie sua branch a partir da Issue** para manter o rastreamento automático
- **Atualize sua branch** com a base antes de abrir o PR para evitar conflitos
=======
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
>>>>>>> 6762543 (feat: Implementa setup inicial do projeto back-end)
