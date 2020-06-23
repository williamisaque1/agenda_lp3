const { Router } = require('express');
const contatoController = require("../controlles/contatoController");
const { request, response } = require('../app');
const contato = Router();
const contatocontroller  = new contatoController;

contato.get("/", async (request, response) => {
  const items = await contatocontroller.index()
  return response.json(items);

});
contato.post("/", async (request, response) => {
  const { nome, email, telefone, idlocal, idtipocontato } = request.body;
  const resp = await contatoController.create(
    nome,
     email, 
     telefone, 
     idlocal, 
     idtipocontato
  );
  return response.json(resp);
});
contato.delete("/:id",async (request,response) => {
 const {id} = request.params;
 const items = await contatocontroller.delete(id);
 return response.json(items);
})

module.exports = contato;

















