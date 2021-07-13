import express from 'express';

//bibliotecas de tipo
// @types/express
const app = express(); //Inicializa o express

//Cria o servidor
//http://localhost:3000
app.listen(3000, () => console.log("Server is running"));

/**Tipos de métodos
 * GET      => Buscar uma informação
 * POST     => Inserir (criar) uma informação dentro da API
 * PUT      => Alterar uma informação
 * DELETE   => Remover um dado
 * PATCH    => Alterar uma informação específica
 */

//Cria a primeira rota
app.get("/test", (request, response) => {
    //Request => Entrando
    //Response => Saindo
    return response.send("Olá NLW!"); //Retorna uma mensagem
})

app.post("/test-post", (request, response) =>{
    return response.send("Olá NLW método POST"); //Retorna uma mensagem
})