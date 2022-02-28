import { Conta } from "./Conta/Conta.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaDeAutenticacao } from "./autenticacao.js";
import { Cliente } from "./Cliente.js";

const diretor = new Diretor("Leonardo", 10000, 12358498531)
diretor.cadastrarSenha("1234")

const gerente = new Gerente("Rodolfo", 7000, 78599658241)
gerente.cadastrarSenha("4564")

const cliente = new Cliente("Fulaninho", 55486958721, "8525")

const DestaLogado = SistemaDeAutenticacao.login(diretor, "1234")
const GestaLogado = SistemaDeAutenticacao.login(gerente, "4564")
const CestaLogado = SistemaDeAutenticacao.login(cliente, "8525")

console.log(DestaLogado, GestaLogado, CestaLogado)