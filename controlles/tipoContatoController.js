const {Client } = require("pg");
const { response } = require("../app");
class tipoContatoController {
    async index() {

        try {
            const client = new Client({
                connectionString: process.env.DATABASE_URL,
               
                ssl: {
                  rejectUnauthorized: false,
                },
              });
            
             client.connect()
            const result = await client.query("SELECT * FROM tipocontato");
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
