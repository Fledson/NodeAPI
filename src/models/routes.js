const express = require('express')
const routes = express.Router()

// importando o ProductController
const ProductController = require('../controllers/ProductController')

// definindo rota
//o primeiro parametro é o endereço
// o segundo parametro é uma função que recebe 2 parametros
// req -> é a requisição feita ao servidor, nele tem os detalhes e informações do servidor (autenticação, usuario, ip e etc...)
// res -> é a resposta que será retornada a requisição 
//mas no caso ele ta chamando a função de dentro do controller
routes.get('/products', ProductController.index)

// procurando o produto pelo ID, para isso depois da rota normal usa-se
//  /:id (o id no caso é o nome do paramentro que quero buscar)
routes.get('/products/:id', ProductController.show)

//chamando roda de criação
routes.post('/products', ProductController.store)

//Update (para atualizar usa-se o metodo put)
routes.put('/products/:id', ProductController.update)

//Remover (para deletar usa-se o metodo delete)
routes.delete('/products/:id', ProductController.destroy)


// exportando as rotas para serem usadas em outros arquivos
module.exports = routes