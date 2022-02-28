

export class SistemaDeAutenticacao {
    static login(autenticavel, senha) {
        if (SistemaDeAutenticacao.isAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha)
        }
        return false
    }

    static isAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
} 