import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


// Cria clientes //
const cliente1 = new Cliente("Leonardo", 11122233309)

const cliente2 = new Cliente("Alice", 88822233309)


// Cria contas //
const conta1 = new ContaCorrente(cliente1, 1001)

const conta2 = new ContaCorrente(cliente2, 102)


// Operações //
conta1.depositar(500)
conta2.depositar(650)

let valor = 200
conta1.tranferir(valor, conta2)

console.log(conta1)
console.log(ContaCorrente.numeroDeContas)