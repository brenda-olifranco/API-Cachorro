const ServiceCachorros = require("../services/cachorros.js")

const novoService = new ServiceCachorros()

class ControllerCachorros{
    SelecionarTodos(req, res){
        try {
            const racas = novoService.SelecionarTodos()
            res.status(200).json({racas})
            
        } catch (error) {
            console.log(error.message)
            res.status(500).json({error: error.message})
        }
    }

    SelecionarEspecifico(req, res){
        try {
            const id = req.params.id
            const raca = novoService.SelecionarEspecifico(id)
            res.status(200).json({raca})
        } catch (error) {
            console.log(error.message)
            res.status(500).json({error: error.message})
        }
    }

    Adicionar(req, res){
        try {
            const raca = req.body.raca;
            novoService.Adicionar(raca);
            res.status(201).json({message: "Adicionado com sucesso!"})
        } catch (error) {
            console.log(error.message)
            res.status(500).json({error: error.message})
        }
    }

    Alterar(req, res){
        try {
            const id = req.params.id
            const raca = req.body.raca
            novoService.Alterar(id, raca)
            res.status(200).json({message: "Alterado com sucesso!"})
        } catch (error) {
            console.log(error.message)
            res.status(500).json({erro: error.message})

        }
    }

    Deletar(req, res){
        try {
            const id = req.params.id
            novoService.Deletar(id)
            res.status(200).json({message: "Deletado com sucesso"})
        } catch (error) {
            console.log(error.message)
            res.status(500).json({error: error.message})
        }
    }

}

module.exports = new ControllerCachorros();
