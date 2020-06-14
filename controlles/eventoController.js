const { Client } = require("pg");
class eventoController {
    async index() {
     

            const client = new Client({
                connectionString: process.env.DATABASE_URL,
                ssl: {
                    rejectionUnauthorized: false,


                },
            });
            client.connect();
            const result = await client.query("select * from evento;")
            client.end();
            const results = result.rows;

            return {name:"faala", assinado:"carlao"};
       



    }

}

module.exports = eventoController;
