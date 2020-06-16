const { Client } = require("pg");
class tipoContatoController {
    async index() {

        try {
            const client = new Client({
                connectionString: process.env.DATABASE_URL,
                ssl: {
                    rejectionUnauthorized: false,


                },
            });
            client.connect();
            const result = await client.query("select * from tipocontato;")
            client.end();
            const results = result.rows;
            return results;
        } catch (err) {
            console.error(err);
            return response.json(err);
        }



    }
};
module.exports = tipoContatoController;
