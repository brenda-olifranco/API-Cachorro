const RepositoryCachorros = require("../repository/cachorros.js")

const novoRepo = new RepositoryCachorros();

class ServiceCachorros{
    SelecionarTodos(){
        return novoRepo.SelecionarTodos();
    }

    SelecionarEspecifico(id){
        return novoRepo.SelecionarEspecifico(id);
    }

    Adicionar(raca){
        return novoRepo.Adicionar(raca)
    }

    Alterar(id, raca){
        return novoRepo.Alterar(id, raca)
    }

    Deletar(id){
        return novoRepo.Deletar(id)
    }
}

module.exports = ServiceCachorros;