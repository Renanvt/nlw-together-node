import express from 'express';

//bibliotecas de tipo
// @types/express
const app = express(); //Inicializa o express

//Cria o servidor
//http://localhost:3000
app.listen(3000, () => console.log("Server is running"));