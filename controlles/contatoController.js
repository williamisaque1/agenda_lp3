const { Client } = require("pg");
class contatoController {
    async index() {

        try {
            const client = new Client({
                connectionString: process.env.DATABASE_URL,
                ssl: {
                    rejectUnauthorized: false, // rejectionUnauthorized: false, este talves erra o erro


                },
            });
            client.connect();
            const result = await client.query("SELECT * FROM contato")
            client.end();
            const results = result.rows;
            return results;
        } catch (err) {
            console.error(err);
            return response.json(err);

        }



    };
    async create(nome, datahora, idlocal, qtdeparticipantes) {
        try {
            const client = new Client({
                connectionString: process.env.DATABASE_URL,
                ssl: {
                    rejectUnauthorized: false, // rejectionUnauthorized: false, este talves erra o erro


                },
            });
            const text = "INSERT INTO contato (nome,email,telefone,idlocal,idtipocontato) VALUES  ($1,$2,$3,$4,$5)";
            const parametros = [nome, email, telefone, idlocal, idtipocontato];
            client.connect();
            const result = await client.query(text, parametros);
            client.end();
            const response = {
                message: "cadastrado",
            }
            return response;
        } catch (err) {
            console.error(err);
            const response = {
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
                    rejectUnauthorized: false,
                }
            });
            const text = "DELETE FROM contato WHERE id = $1";
            const parametros = [id];
            client.connect();
            const result = await client.query(text, parametros);
            client.end();
            const response = {
                message: "excluido",
            };
            return response;
        } catch (err) {
            console.log(err);
            const response = {
                message: "erro",
            }
            return response;
        }
    }
};
module.exports = contatoController ;
