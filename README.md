# 🚀 CloudFlow

Projeto DevOps básico desenvolvido para demonstrar conceitos de integração contínua, testes automatizados e containerização.

## 🎯 Objetivo

Criar uma API REST simples utilizando Node.js e Express e automatizar sua validação através do GitHub Actions.

## 🛠️ Tecnologias

- Node.js
- Express
- Jest
- Supertest
- Docker
- Docker Compose
- Git
- GitHub
- GitHub Actions

## 📁 Estrutura

cloudflow/
├── .github/
│   └── workflows/
│       └── ci.yml
├── src/
│   └── server.js
├── tests/
│   └── server.test.js
├── .dockerignore
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
└── README.md

## ▶️ Executando localmente

Instale as dependências:

npm install

Execute os testes:

npm test

Execute a aplicação:

npm start

Acesse:

http://localhost:3000

Health check:

http://localhost:3000/health

## 🐳 Executando com Docker

Construir a imagem:

docker build -t cloudflow:local .

Executar:

docker run -d --name cloudflow -p 3000:3000 cloudflow:local

Ou utilizando Docker Compose:

docker compose up -d

## 🔄 CI/CD

Atualmente o projeto possui integração contínua através do GitHub Actions.

A cada push na branch main e a cada Pull Request para main:

1. O código é baixado.
2. Node.js é configurado.
3. As dependências são instaladas.
4. Os testes automatizados são executados.
5. A imagem Docker é construída.

## ❤️ Health Check

Endpoint:

GET /health

Resposta:

{
  "status": "healthy"
}

## 📚 Objetivo de aprendizado

Este projeto faz parte da minha jornada prática de aprendizado em DevOps, com foco em:

- Linux
- Git
- GitHub
- Docker
- CI/CD
- Automação
- Testes
- Containerização
