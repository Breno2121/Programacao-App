import { v4 as uuid } from 'uuid'

export default class usuario {
    private id: string;
    private name: string;
    private email: string;
    private password: string;
    private data_nascimento: Date;
    private criado_em: Date;
    private atualizado_em: Date;

    constructor(name: string, email: string, password: string, data_nascimento: Date) {
        this.id = uuid()
        this.name = name
        this.email = email
        this.data_nascimento = data_nascimento;
        this.criado_em = new Date();
        this.atualizado_em = new Date();
        this.password = password;
    }

    public getId() {
        return this.id;
    }
    public getname() {
        return this.name;
    }
    public getemail() {
        return this.email;
    }
    public getpassword() {
        return this.password;
    }
    public getdata_nascimento() {
        return this.data_nascimento;
    }
    public getcriado_em() {
        return this.criado_em;
    }
    public getatualizado_em() {
        return this.atualizado_em;
    }


}