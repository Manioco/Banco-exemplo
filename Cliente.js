export class Cliente{
    // Variáveis //

    // GETs e SETs //
    get cpf(){
        return this._cpf
    }


    // Constructor //
    constructor(nome, cpf){
        this.nome = nome
        this._cpf = cpf
    }


    // operações //
}