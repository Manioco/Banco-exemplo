import { Conta } from "./Conta.js"

export class ContaPoupanca extends Conta{
    // Construtor
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia)
    }


    // Operações //
    sacar(valor){
        const taxa = 1.02

        return this._sacar(valor, taxa)
    }
}