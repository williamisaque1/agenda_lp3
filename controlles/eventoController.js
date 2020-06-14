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
            const result = await client.query("select * from evento;")
            client.end();
            const results = result.rows;

            return {name:"oiiii", ass:"cheiroso"};
        }

        catch (err) {
            console.error(err);
            return response.json(err);
        }



    }

}

module.exports = eventoController;
