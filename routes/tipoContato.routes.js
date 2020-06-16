const { Router } = require("express");
//const { Pool } = require("pg");
const tipoContatoController = require("./controlles/tipoContatoController");

const tipoContatoRouter = Router();
const tipocontatoController  =  new  tipoContatoController();

tipoContatoRouter.get("/", async (request, response) => {
  const items = await tipocontatoController.index(); 
  return response.json(items);
  

});
/*
tipoContatoRouter.post("/", async (request, response) => {
  const { descricao } = request.body;

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    const text = "INSERT INTO public.tipocontato (descricao) VALUES($1);";
    const parametros = [descricao];

    const client = await pool.connect();
    const result = await client.query(text, parametros);
    const results = result.rows;
    client.end();
    return response.json({ results });
  } catch (err) {
    console.error(err);
    return response.json(err);
  }
});

tipoContatoRouter.patch("/:id", async (request, response) => {
  const { id } = request.params;
  const { descricao } = request.body;

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    const text = "UPDATE tipocontato SET descricao = $1 WHERE id = $2";
    const parametros = [descricao, id];

    const client = await pool.connect();
    const result = await client.query(text, parametros);
    const results = result.rows;
    client.end();
    return response.json({ results });
  } catch (err) {
    console.error(err);
    return response.json(err);
  }
});

tipoContatoRouter.delete("/:id", async (request, response) => {
  const { id } = request.params;

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    const text = "DELETE FROM public.tipocontato WHERE id=$1";
    const parametros = [id];

    const client = await pool.connect();
    const result = await client.query(text, parametros);
    const results = result.rows;
    client.end();
    return response.json({ results });
  } catch (err) {
    console.error(err);
    return response.json(err);
  }
});
*/

module.exports = tipoContatoRouter;
