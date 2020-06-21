const { Router } = require("express");

const tipoContatoRouter = require("./tipoContato.routes");
const localRouter = require("./Local.routes");
const eventoRouter = require("./evento.routes");
const contatoRouter = require("./contato.routes");
const participantesevento = require("./participantesEvento.routes");
const routes = Router();
console.log("codigo chegou aqui 2");
routes.use("/tipoContato", tipoContatoRouter);
routes.use("/local",localRouter);
routes.use("/evento",eventoRouter);
routes.use("/contato" ,contatoRouter);
routes.use("/participantesevento",participantesevento);

module.exports = routes;

