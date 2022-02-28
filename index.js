import { Cliente } from "./Conta/Cliente.js"
import { ContaCorrente } from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js"
import { ContaSalario } from "./Conta/contaSalario.js"


// Cria clientes //
const cliente1 = new Cliente("Leonardo", 11122233309)

// const cliente2 = new Cliente("Alice", 88822233309)


// Cria contas //
const contaP = new ContaPoupanca(100, cliente1, 1001)

const contaC = new ContaCorrente(cliente1, 1001)

const contaS = new ContaSalario(230, cliente1, 15151)


// Operações //
console.log(contaC)
console.log(contaP)
console.log(contaS)

contaC.depositar(1000)
contaP.depositar(1350)
contaS.depositar(2563)

console.log(contaC.saldo)
console.log(contaP.saldo)
console.log(contaS.saldo)

contaC.sacar(10)
contaP.sacar(10)
contaS.sacar(10)

console.log(contaC.saldo)
console.log(contaP.saldo)
console.log(contaS.saldo)