const { Router } = require('express');
const EventoController = require("../controlles/eventoController");
const { request, response } = require('../app');
const evento = Router();
const eventoController = new EventoController();

evento.get("/", async (request, response) => {
  const items = await eventoController.index();
  return response.json(items);

});
evento.post("/", async (request, response) => {
  const { nome, datahora, idlocal, qtdeparticipantes } = request.body;
  const resp = await eventoController.create(
    nome,
    datahora,
    idlocal,
    qtdeparticipantes
  );
  return response.json(resp);
});
evento.delete("/:id",async (request,response) => {
 const {id} = request.params;
 const items = await eventoController.delete(id);
 return response.json(items);
})

module.exports = evento;

















