const { Router } = require('express');
const eventoController = require("../controlles/eventoController");

const evento = Router();
const EventoController = new eventoController;

evento.get("/", async (Request, Response) => {
  const item = await EventoController.index; 
  return Response.json(item);
  

});
evento.post("/", async (Request, Response) => {
    const { nome, datahora, idlocal, qtdeparticipantes } = Request.body;
    const pool = new Pool({
        connectionString: process.env.database_url,
        ssl: {
            rejectUnauthorized: false,
        },
    });
    try {
        const  aux = "select * from evento where  = idlocal ;" 
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
});
module.exports = evento;
















