//Metodos HTTP: get, post, put, delete

//Query Params: request.query (FIltros, Ordenacao, Paginacao)
//Route Params: request.params(Identificar recurso na Alteracao ou remocao)
// Body:  request.body(Dados para a criacao ou alteracao de um registro)

//MongoDB (Nao-Relacional)
const { Router } = require('express');
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router();

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index)

module.exports = routes
