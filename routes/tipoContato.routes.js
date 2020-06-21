const { Router } = require("express");
const tipoContatoController = require("../controlles/tipoContatoController");
const { request, response } = require("../app");

const tipoContatoRouter = Router();
const tipocontatoController  =  new  tipoContatoController();

tipoContatoRouter.get("/", async (request, response) => {
  const items = await tipocontatoController.index(); 
  return response.json(items);
});

tipoContatoRouter.post("/",async(request,response) => {
  const {id,descricao} = request.body;
  const items = await tipocontatoController.create(id,descricao);
  return response.json(items);
});
tipoContatoRouter.delete("/:id",async(request,response) =>{
  const {id} = request.params;
  const items = await tipocontatoController.delete(id);
  return response.json(items);
})
module.exports = tipoContatoRouter;




