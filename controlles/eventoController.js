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
            client.connect();
            console.log("codigo chegou aqui4");
            const result = await client.query("select * from evento;")
            client.end();
            const results = result.rows;
            return results;
        } catch (err) {
            console.error(err);
            return response.json(err);  console.log("codigo chegou aqui3");
        }

    }
}
module.exports = eventoController;
