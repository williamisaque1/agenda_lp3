const { Client } = require("pg");
const { response } = require("express");
class participantesEventoController {
    async index() {
        try {
            const client = new Client({
                connectionString: process.env.DATABASE_URL,
                ssl: {
                    rejectUnauthorized: false,
                },

            });
            client.connect();
            const text = "SELECT FROM participantesevento";
            const result = await client.query(text);
            client.end();
            const results = result.rows;
            return results;
        } catch (err) {
            console.error(err);
            return response.json(err);
        }
    }
    async create(idevento,idcontato,confirmacao) {
        try {
            const client = new Client({
                connectionString: process.env.DATABASE_URL,
                ssl: {
                    rejectUnauthorized: false,
                },

            });
            const text = "INSERT INTO participantesevento (idevento,idcontato,confirmacao) VALUES ($1,$2,$3)"
            const params = [idevento,idcontato,confirmacao];
            client.connect();
            const result = await client.query(text, params);
            client.end();
            const response = {
                message: "cadastrado",
            };
            return response;
        } catch (err) {
            console.error(err);
            const result = {
                message: "erro",
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
            client.connect();
            const text = "DELETE FROM participantesevento WHERE id = $1 ";
            const params = [id];
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

module.exports = participantesEventoController;