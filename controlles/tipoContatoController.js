const { Client } = require("pg");
class tipoContatoController {
    async index() {


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
    };



};




module.exports = tipoContatoController;
