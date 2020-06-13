const { Client } = require("pg");
const {Pool} = require ("pg");
class eventoController {
    async index() {
        evento.post("/", async (Request, Response) => {
         
            const pool = new Pool({
                connectionString: process.env.database_url,
                ssl: {
                    rejectUnauthorized: false,
                },
            });
            try {
                const  aux = "select * from evento where  = idlocal ;" 
                const client = await Pool.connect();
                const result = client.query(aux);
                const results = result.rows;
                client.end();
                return  results ;
            } catch (err) {
                console.error(err);
                return Response.json(err);
       /* try {

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
           
            return results;
              
        } catch (err) {
            console.error(err);
            return response.json(err);
}
        


    }

}
*/
module.exports = eventoController;
