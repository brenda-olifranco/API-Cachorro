const ControllerCachorros = require("../controller/cachorros.js")
const express = require("express");

const router = express.Router()

router.get('/cachorros', ControllerCachorros.SelecionarTodos);
router.get('/cachorros/:id', ControllerCachorros.SelecionarEspecifico);
router.post('/cachorros/criar', ControllerCachorros.Adicionar);
router.put('/cachorros/alterar/:id', ControllerCachorros.Alterar);
router.delete('/cachorros/deletar/:id', ControllerCachorros.Deletar);

module.exports = router;


