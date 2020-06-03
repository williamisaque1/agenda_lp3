const { Router } = require("express");

const tipoContatoRouter = require("./tipoContato.routes");
const local = require("./Local.routes");

const routes = Router();

routes.use("/tipoContato", tipoContatoRouter);
routes.use("/local",local);
module.exports = routes;

