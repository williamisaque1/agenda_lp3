const { Router } = require('express');
const participantesEventoController = require("../controlles/participantesEventoController");
const { request, response } = require('../app');
const participanteseventoRouter = Router();
const participanteseventoController  = new participantesEventoController;

participanteseventoRouter.get("/", async (request, response) => {
  const items = await participanteseventoController.index();
  return response.json(items);

});
participanteseventoRouter.post("/", async (request, response) => {
  const {idevento,idcontato,confirmacao } = request.body;
  const resp = await participanteseventoController.create(idevento,idcontato,confirmacao);

  return response.json(resp);
});

participanteseventoRouter.delete("/:id",async (request,response) => {
 const {id} = request.params;
 const items = await participanteseventoController
 return response.json(items);
})

module.exports = participanteseventoRouter;

















