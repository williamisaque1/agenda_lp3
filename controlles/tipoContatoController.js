const { Pool } = require("pg");
class tipoContatoController {
    async index() {

        try {
            const pool = new Pool({
                connectionString: process.env.DATABASE_URL,
               
                ssl: {
                  rejectUnauthorized: false,
                },
              });
            
             pool.connect()
            const result = await pool.query("select * from tipocontato");
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
