// Importando o mongoose
const mongoose = require('mongoose')

const mongoosePaginate = require('mongoose-paginate')

//o objeto é como se fosse a tabela, os atributos são as colunas
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

ProductSchema.plugin(mongoosePaginate)

//Registrando o model (ele passa a existir com as suas propriedades)
mongoose.model('Product', ProductSchema)