const { Router } = require("express");
const Localcontroller = require("../controlles/localController");
const localRouter = Router();
const localcontroller = new Localcontroller();

localRouter.get("/",async (request,response) =>{
 const items = await localcontroller.index();
 console.log(items);
  return response.json(items);
});
localRouter.post("/",async(request,response) => {
  const {cep, endereco, numero, bairro, complemento, cidade, estado} = request.body;
  const items = await localcontroller.create(cep, endereco, numero, bairro, complemento, cidade, estado);
return response.json(items);
});
localRouter.delete("/:id",async(request,response) => {
  const {id} = request.params; 
  const items =  await localcontroller.delete(id);
  return response.json(items);
});


module.exports = localRouter;
