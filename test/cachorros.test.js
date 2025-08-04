const {describe, expect, it} = require('@jest/globals')
const ServiceCachorros = require('../src/services/cachorros.js')

describe('Primeiro teste de cachorro', () => {
    const service = new ServiceCachorros();

    it("Adicionar nova raça na lista", () =>{
        const NovaRaca = "Salsicha";
        service.Adicionar(NovaRaca);

        const racas = service.SelecionarTodos();
        console.log(racas)

        expect(racas[racas.length - 1]).toBe(NovaRaca);
    })

    it("Alterar raça da lista", () =>{
        const AlteraRaca = "Chiuaua";
        service.Alterar(2, AlteraRaca);

        const racas = service.SelecionarTodos();
        console.log(racas)

        expect(racas[2]).toContain(AlteraRaca)
    })

    it("Deleta raça da lista", () =>{
        const indexDeletar = 0 
        service.Deletar(indexDeletar)

        const racas = service.SelecionarEspecifico(indexDeletar);
        console.log(racas)

        expect(racas).toBeUndefined
    })

});