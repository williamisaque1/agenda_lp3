const { Router } = require('express');
const eventoController = require("../controlles/eventoController");

const evento = Router();
const EventoController = new eventoController;

evento.get("/", async (Request, Response) => {
  const items = await EventoController.index(); 
  return Response.json(items);
  

});

module.exports = evento;
















