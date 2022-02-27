export class Cliente{
    // Variáveis //
    nome
    _cpf

    
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