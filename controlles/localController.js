const { Client } = require("pg");
console.log("chegouu");
class localController {
    async index() {
        try {
            const client = new Client({
                connectionString: process.env.DATABASE_URL,
                ssl: {
                    rejectUnauthorized: false,
                },

            });

            const text = "SELECT FROM local";
            client.connect();
            const result = await client.query(text);
            client.end();
            const results = result.rows;
            return results;
        } catch (err) {
            console.error(err);
            return response.json(err);
        }
    }
    async create(cep, endereco, numero, bairro, complemento, cidade, estado) {
        try {
            const client = new Client({
                connectionString: process.env.DATABASE_URL,
                ssl: {
                    rejectUnauthorized: false,
                }

            });
            const text = "INSERT INTO local (cep,endereco,numero,bairro,complemento,cidade,estado) VALUES ($1,$2,$3,$4,$5,$6,$7)"
            const params = [cep, endereco, numero, bairro, complemento, cidade, estado];
            client.connect();
            const result = await client.query(text, params);
            client.end();
            const response = {
                message: "cadastrado",
            };
            return response;
        } catch (err) {
            console.error(err);
            const response = {
                message: "Erro",
            };
            return response;
        }
    };
    async delete(id) {
        try {
            const client = new Client({
                connectionString: process.env.DATABASE_URL,
                ssl: {
                    rejectUnauthorized = false,
                }
            });
           
            const text = "DELETE FROM local WHERE id = $1 ";
            const params = [id];
            client.connect();
            const result = await client.query(text, params);
            client.end();
            const response = {
                message: "deletado",
            };
            return response;
        } catch (err) {
            console.error(err);
            const response = {
                message: "erro",
            };
            return response;
        }
    };
};

module.exports = localController;