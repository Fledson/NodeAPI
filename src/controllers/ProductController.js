const mongoose = require('mongoose')

// importando o model de produtos
const Product = mongoose.model('Product')

// exportando objeto com funções
module.exports = {
    // faz listagem de todos os produtos do BD
    async index(req, res) {
        // usando a desestuturação de obejto eu pego o parametro "page" e uso o "query" para consultar o valor 
        const { page = 1 } = req.query

        // criando a variavel products que recebe a busca feita no banco na tabela product
        // a busca(find) não tem nenhuma clausula "where" (OLD)
        // a nova busca usando agora paginate serve para impor um limite a pagina a função recebe 2 parametros => paginate({aqui seria o where se houvesse}, {o segundo é os dados da pagina e o limite})
        const products = await Product.paginate({}, { page, limit: 10 })

        // retornando o valor em json
        return res.json(products)
    },
    //mostrar detalhes do produto, aqui eu busco um produto especifico pelo id
    async show(req, res) {
        // busca (para buscar um parametro especifico usa-se o params.(o que quero buscar))
        const product = await Product.findById(req.params.id)

        return res.json(product)
    },

    async store(req, res) {
        //criação
        const product = await Product.create(req.body)

        return res.json(product)
    },

    async update(req, res) {
        //Atualizar dados 
        //os parametros são
        // 1 - o de busca, então ele busca pelo id
        // 2 - o que ele vai atualizar, então são as novas informações do produto
        // 3 - esse { new:true } serve para ele retornar para a varial o produto depois de atualizar
        // , sem ele ele retorna o valor antes da atualização
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })

        return res.json(product)
    },

    async destroy(req, res) {
        // remover
        await Product.findByIdAndRemove(req.params.id)

        return res.send()
    }
}