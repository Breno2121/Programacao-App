import { Client } from "pg";
import usuario from "src/enty/usuario";

export default class VeiculoRepository {
    private connection: Client
    constructor() {
        if (!this.connection) {
            this.connection = new Client({
                host: 'localhost',
                port: 5432,
                database: 'revenda',
                user: 'postgres',
                password: 'senai'
            })
        }
    }
    async save(usuario: usuario) {
        try {
            this.connection.connect();
            const sql = "INSERT INTO usuario (id, email, data_nascimento, password_hash, criado_em, atualizado_em) VALUES ($1, $2, $3, $4, $5, $6)";
            const values = [usuario.getId(), usuario.getemail(), usuario.getdata_nascimento(), usuario.getpassword(), usuario.getcriado_em(), usuario.getatualizado_em()];
            await this.connection.query(sql, values);
        } catch (error) {
            console.log(error)
        } finally {
            this.connection.end();
            this.connection = null;
        }
    }
}