const { Router } = require('express');
const EventoController = require("../controlles/eventoController");

const evento = Router();
const eventoController = new EventoController();

evento.get("/", async (request, response) => {
  const items = await eventoController.index(); 
  return response.json([{name:"oiii", ass:"cheiroso"}]);
  

});
/*evento.post("/", async (Request, Response) => {
    const { nome, datahora, idlocal, qtdeparticipantes } = Request.body;
    const pool = new Pool({
        connectionString: process.env.database_url,
        ssl: {
            rejectUnauthorized: false,
        },
    });
    try {
        const  aux = "s elect * from evento where  = idlocal ;" 
        const text = "insert into evento (nome,datahora,idlocal,qtdeparticipantes) values ($1,$2,$3,$4); ";
        const parametros = [nome, datahora, idlocal, qtdeparticipantes];
        const client = await Pool.connect();
        const result = client.query(text, parametros);
        const results = result.rows;
        client.end();
        return Response.json({ results });
    } catch (err) {
        console.error(err);
        return Response.json(err);

    } 
});*/
module.exports = evento;
















