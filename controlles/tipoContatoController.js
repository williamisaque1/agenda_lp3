const { Client } = require("pg");
const { response } = require("../app");
const { text } = require("express");
class tipoContatoController {
    async index() {

    
            try {
                const client = new Client({
                    connectionString: process.env.DATABASE_URL,
                    ssl: {
                        rejectUnauthorized: false, // rejectionUnauthorized: false, este talves erra o erro
    
    
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
    async create(id, descricao) {
        try {
            const client = new Client({
                connectionString: process.env.DATABASE_URL,
                ssl: {
                    rejectUnauthorized : false,
                }
            });
            const text = "INSERT INTO tipocontato ( id , descricao) VALUES ($1,$2)";
            const params = [id, descricao];
            client.connect();
            const result = await client.query(text, params);
            client.end();
            const response = {
                message: "cadastrado",
            };
            return response

        } catch (err) {
            console.error(err);
            const response = {
                message: "erro",
            };
            return response;

        }
    }
    async delete (id){
        try{
            const client = new Client({
                connectionString:process.env.DATABASE_URL,
                    ssl:{
                        rejectUnauthorized : false,
                    }
            });
            client.connect();
            const text = "DELETE FROM tipocontato WHERE id = $1 ";
            const params = [id];
            const result = await client.query(text,params);
            client.end();
            const response = {
                message:"deletado",
            };
            return response ;
        }catch(err){
            console.error(err);
            const response = {
                message: "erro",
            };
            return response;
        }
    };

};
module.exports = tipoContatoController;
