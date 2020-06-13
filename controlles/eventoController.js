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
            return results;

        } catch (err) {


            return Promise.reject('Oops!').catch(err => {
                throw new Error(err);
                console.error(err);

            });
        }




    }

}

module.exports = eventoController;
