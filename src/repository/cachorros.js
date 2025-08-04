const bancoCachorros = ['Golden', 'Labrador', 'Caramelo', 'Pastor Alemão'];

class RepositoryCachorros{
    SelecionarTodos(){
        return bancoCachorros;
    }

    SelecionarEspecifico(id){
        return bancoCachorros[id];
    }

    Adicionar(raca){
        bancoCachorros.push(raca)
    }

    Alterar(id, raca){
        bancoCachorros[id] = raca 
    }

    Deletar(id){
        bancoCachorros.splice(id, 1)
    }
}

module.exports = RepositoryCachorros;