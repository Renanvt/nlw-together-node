# nlw-together-node

<h1 align="center">Valoriza</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000">

  <img src="https://img.shields.io/static/v1?label=NLW&message=Together&color=8257E5&labelColor=000000" alt="NLW Together" />
</p>

<p align="center">
  <img alt="Preview" src="./img/preview.png">
</p>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)

## Alguns comandos

- `yarn init -y` - cria o projeto
- `yarn add typescript -D` -> insere a biblioteca typescript como biblioteca de desenvolvimento
node index.js -> executa um arquivo (precisa estar em javascript)
- `yarn tsc --init` -> inicializar o typescript
- `yarn tsc` -> converte o código para javascript

- `yarn add express` -> instala o express, framework pra criar rotas, recursos, etc
- `yarn add @types/express -D` -> instala as tipagens

- `yarn add ts-node-dev -D` -> automatiza o processo de conversão de ts para js
```ts
package.json:
 "scripts" : {
    "dev": "ts-node-dev src/server.ts"
  }
```
`yarn dev` - inicia a aplicação, fazendo o reload automático

## 💻 Projeto

Valoriza é uma plataforma para promover o reconhecimento entre companheiros de equipe.

## 🚀 Como executar

- Clone o repositório
- Rode `yarn` para baixar as dependências
- Rode `yarn typeorm migration:run` para criar as tabelas do banco de dados.
- Rode o `yarn dev` para iniciar a aplicação.

Por fim, a aplicação estará disponível em `http://localhost:3000`

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
Feito com 💜 &nbsp;by Rocketseat 👋🏻 &nbsp;[Participe da nossa comunidade!](https://discord.gg/gKUVrzrPrU)