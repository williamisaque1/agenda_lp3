const { Router } = require('express');
const EventoController = require("../controlles/eventoController");
const {Client} = require('pg');
const evento = Router();
const eventoController = new EventoController();

evento.get("/", async (request, response) => {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
       
        ssl: {
          rejectUnauthorized: false,
        },
      });
    
      try {
        client.connect();
        const result = await client.query("SELECT * FROM evento");
        const results = result.rows;
        client.end();
        return response.json({ results });
      } catch (err) {
        console.error(err);
        return response.json(err);
      }
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
















