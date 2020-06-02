const { Router } = require("express");

const tipoContatoRouter = require("./tipoContato.routes");
const participantesEventos = require("./participantesEvento.routes");
const local = require("./Local.routes");

const routes = Router();

routes.use("/tipoContato", tipoContatoRouter);
routes.use("/participantesEventos",participantesEventos);
routes.use("/local",local);
module.exports = routes;

