const Product = require('../../../models/Product.model')

const Services = {
    getProductsByCategorie: async _categorie => {
        return await Process.listProductsByCategorie()
    }
}

const Process = {

    listProductsByCategorie: (_categorie) => {
        return Product.find({ Category: _categorie }).exec()
    },
}

module.exports = Services