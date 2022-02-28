export class Cliente {
    // Variáveis //

    // Constructor //
    constructor(nome, cpf, senha) {
        this.nome = nome
        this._cpf = cpf
        this._senha = senha
    }


    // GETs e SETs //
    get cpf() {
        return this._cpf
    }


    // operações //
    autenticar(senha) {
        return true
    }
}