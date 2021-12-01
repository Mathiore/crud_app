const express = require('express');
const route = express.Router()
const services = require('../services/render');

const controller = require('../controller/controller')

route.get('/', services.homeRoutes);

route.get('/table-funcionarios', services.tableFuncionarios);

route.get('/novo-funcionario', services.novoFuncionario);

route.get('/cadastro-condominio', services.cadastroCondominio);

route.get('/alterarFuncionario', services.alterarFuncionario);

route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route;