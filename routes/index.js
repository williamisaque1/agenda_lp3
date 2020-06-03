const { Router } = require("express");

const tipoContatoRouter = require("./tipoContato.routes");
const localRouter = require("./Local.routes");

const routes = Router();

routes.use("/tipoContato", tipoContatoRouter);
routes.use("/local",localRouter);
module.exports = routes;

