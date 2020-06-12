const { Router } = require("express");

const tipoContatoRouter = require("./tipoContato.routes");
const localRouter = require("./Local.routes");
//const evento = require("./evento.routes");
const routes = Router();

routes.use("/tipoContato", tipoContatoRouter);
routes.use("/local",localRouter);
//routes.use("/evento",evento);
module.exports = routes;

