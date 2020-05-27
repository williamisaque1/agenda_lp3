const { Router } = require("express");

const tipoContatoRouter = require("./tipoContato.routes");

const routes = Router();

routes.use("/tipoContato", tipoContatoRouter);

module.exports = routes;
