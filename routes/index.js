const { Router } = require("express");

const tipoContatoRouter = require("./tipoContato.routes");
const localRouter = require("./Local.routes");
const eventoRouter = require("../controlles/eventoController");
const routes = Router();
console.log("codigo chegou aqui2");
routes.use("/tipoContato", tipoContatoRouter);
routes.use("/local",localRouter);
routes.use("/evento",eventoRouter);
module.exports = routes;

