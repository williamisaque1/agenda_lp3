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
            const result = await client.query("SELECT * FROM lugar ;");
            client.end();
            const results = result.rows;
            return result;
        } catch (err) {
            console.error(err);
            return response.json(err);
        }

    }
}
module.exports = eventoController;
