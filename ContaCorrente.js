import { Cliente } from "./Cliente.js"

export class ContaCorrente{
    // Variáveis //
    static numeroDeContas = 0
    _cliente
    _agencia
    // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0
    

    // SETs e GETs //
    set cliente(novoValor){
        if (novoValor instanceof Cliente){
            this._cliente = novoValor
        }
    }

    get cliente(){
        return this._cliente
    }

    get saldo(){
        return this._saldo
    }


    // Constructor //
    constructor(cliente, agencia){
        this.cliente = cliente
        this._agencia = agencia
        ContaCorrente.numeroDeContas += 1
    }
    

    // Operações //
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor
            return valor
        }
    }

    depositar(valor){
        if(valor <= 0)
        {
            return
        } 
        this._saldo += valor           
    }

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
        
    }
}
