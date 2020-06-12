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
            console.log("codigo chegou aqui")
            client.connect();
            const result = await client.query("SELECT * FROM lugar ;");
            client.end();
            const results = result.rows;
            return results;
        } catch (err) {
            console.error(err);
            return response.json(err);
        }

    }
}
module.exports = eventoController;
