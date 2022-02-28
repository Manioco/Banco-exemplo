import { Funcionario } from "./Funcionarios.js";


export class Diretor extends Funcionario {
    // Constructor //
    constructor(nome, salario, cpf) {
        super(nome, salario, cpf)
        this._bonificacao = 2
    }
}