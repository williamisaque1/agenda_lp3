const { Client } = require("pg");
class eventoController {
    async index() {
        try {
            const client = new Client({
                connectionString: process.env.DATABASE_URL,
                ssl: {
                    rejectionUnauthorized: false,

                },
            });

            client.connect();

            const result = await client.query("SELECT * FROM tipocontato ");
            client.end();
            const results = result.rows;

            return results;
        } catch (err) {
            console.error(err);
            console.log("codigo chegou aqui");
            return Response.json(err);
        }

    }
}
module.exports = eventoController;
