const { Router } = require("express");
const { Pool } = require("pg");

const LocalRouter = Router();

LocalRouter.get("/", async (request, response) => {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
   
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM tipocontato");
    const results = result.rows;
    client.end();
    return response.json({ results });
  } catch (err) {
    console.error(err);
    return response.json(err);
  }
});

LocalRouter.post("/", async (request, response) => {
  const {cep} = request.body;
  const { endereco } = request.body;
  const { numero } = request.body;
  const { bairro } = request.body;
  const { complemento } = request.body;
  const { cidade } = request.body;
  const { estado } = request.body;

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    const text = "INSERT INTO public.local (cep ,endereco,numero,bairro,complemento,cidade,estado) VALUES($1,$2,$3,$4,$5,$6,$7);";
    const parametros = [cep,endereco,numero,bairro,complemento,cidade,estado];
   

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

module.exports = tipoContatoRouter;
