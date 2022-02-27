import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js"


// Cria clientes //
const cliente1 = new Cliente("Leonardo", 11122233309)

// const cliente2 = new Cliente("Alice", 88822233309)


// Cria contas //
const contaC = new ContaPoupanca(100, cliente1, 1001)

const contaP = new ContaCorrente(cliente1, 1001)


// Operações //
console.log(contaC)
console.log(contaP)

contaC.depositar(1000)
contaP.depositar(1000)

console.log(contaC.saldo)
console.log(contaP.saldo)

contaC.sacar(10)
contaP.sacar(10)

console.log(contaC.saldo)
console.log(contaP.saldo)