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
            console.log("codigo chegou aqui4");
            const result = await client.query("select * from evento;")
            console.log("codigo chegou aqui3");
            client.end();
            const results = result.rows;
           
            return Response.json([
                {
                    name: "gta",
                     studio:"rockstar"
                }]);
              
        } catch (err) {
            console.error(err);
            return response.json(err);
}
        


    }

}

module.exports = eventoController;
