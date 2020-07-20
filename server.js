// importando express
const express = require('express')

//importando o cors (para chamar a minha api de outro local)
const cors = require('cors')

// importando mongoose
const mongoose = require('mongoose')
    //importando a require-Dir (essa biblioteca faz o require em um diretorio automaticamente)
const requireDir = require('require-dir')

// ======= INICIANDO O APP =======
// excecultando a função express na variavel
const app = express()
    //fazendo meu dados retornarem e json
app.use(express.json())
    //deixando a api disponivel para ser acessada por outros locais
app.use(cors())

// ======= INICIANDO O APP =======
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true })

//registrando o model na aplicação (com require ID só passo a pasta e ele faz o require de tudoq que tem dentro)
requireDir('./src/models')

// rota
app.use('/api', require('./src/models/routes'))

//Informando a porta 
app.listen(3001)