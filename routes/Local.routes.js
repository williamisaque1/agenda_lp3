const { Router } = require("express");
const Localcontroller = require("../controlles/localController");
const { request, response } = require("../app");
const localRouter = Router();
const localcontroller = new Localcontroller();

localRouter.get("/",async (request,response) =>{
 const items = localcontroller.index();
  return response.json(items);
});
localRouter.post("/",async(request,response) => {
  const {cep, endereco, numero, bairro, complemento, cidade, estado} = request.body;
  const items = localcontroller.create(cep, endereco, numero, bairro, complemento, cidade, estado);
return response.json(items);
});
localRouter.delete("/:id",async(request,response) => {
  const {id} = request.params; 
  const items = localcontroller.delete(id);
  return response.json(items);
});


module.exports = localRouter;
