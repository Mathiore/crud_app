const express = require('express');
const route = express.Router()
const services = require('../services/render');


route.get('/', services.homeRoutes);

route.get('/table-funcionarios', services.tableFuncionarios);

route.get('/novo-funcionario', services.novoFuncionario);

route.get('/cadastro-condominio', services.cadastroCondominio);

route.get('/alterarFuncionario', services.alterarFuncionario);

module.exports = route