import { Conta } from "./Conta.js"


export class ContaCorrente extends Conta{
    // Variáveis //
    static numeroDeContas = 0

    // Constructor //
    constructor(cliente, agencia){
        super(0, cliente, agencia)
        ContaCorrente.numeroDeContas += 1
    }


    // Operações //
    sacar(valor){
        let taxa = 1.1
        return this._sacar(valor, taxa)
    }
}
