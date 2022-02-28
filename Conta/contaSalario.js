import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    // Constructor //
    constructor(cliente){
            super(0, cliente, 454)
    }


    // Operacoes //
    sacar(valor){
        const taxa = 1.01

        return this._sacar(valor, taxa)
    }
}