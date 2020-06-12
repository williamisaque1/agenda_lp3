const { Client } = require("pg");
class eventoController {
    async index(){
        try {
            console.log("codigo chegou aqui");
            const client = new Client({
                connectionString: process.env.DATABASE_URL,
                ssl: {
                    rejectionUnauthorized: false,

                },
            });

           await client.connect();

            const result = await client.query("SELECT * FROM tipocontato ");
            client.end();
            const results = result.rows;
            return results;
        } catch (err) {
            console.error(err);
            return Response.json(err);
        }

    }
}
module.exports = eventoController;
