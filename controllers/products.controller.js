import { readProducts, writeProducts, createNewProducst, paginateProduct } from "../service/product.service.js"
export const createProducst = (req, res, next) => {
    try {
        const result = createNewProducst(req.body)
        if (result) {
            res.status(200).end("Created")
        } else {
            res.status(400).end("Nimadurda xato bor uzim ham bilmayman menimcha yozmadi")
        }
    } catch (error) {
        next(error)
    }
}

export const getAllProducsts = (req, res, next) => {
    try {
        const { limit, page } = req.query
        const products = readProducts()
        const result = paginateProduct(limit, page, products)
        const {lamp, paginatedProducts} = result
        if (lamp) {
            if (paginatedProducts.length != 0) {
                res.status(200).json(paginatedProducts)
            } else {
                res.status(200).send("products not found")
            }
        } else {
            res.status(400).end("products not found")
        }

    } catch (error) {
        next(error)
    }
}

export const deleteByIdProducst = (req, res, next) => {
    try {
        const products = readProducts()
        const productId = req.params.id
        const newProducts = products.filter(phone => phone.id != productId)
        const result = writeProducts(newProducts)
        if (result) {
            res.status(200).send("product deleted")
        } else {
            res.status(400).end("xato")
        }
    } catch (error) {
        next(error)
    }
}


export const getByIdProducst = (req, res, next) => {
    try {
        const products = readProducts()
        const productId = req.params.id
        const product = products.find(phone => phone.id == productId)
        if (product) {
            res.status(200).json(product)
        } else {
            res.status(400).send("product not found")

        }

    } catch (error) {
        next(error)
    }
}


export const updateByIdProducst = (req, res, next) => {
    try {
        const productId = req.params.id
        const newProductData = req.body

        const products = readProducts()

        for (let index in products) {
            if (products[index].id == productId) {
                products[index] = newProductData
                break
            }
        }

        const result = writeProducts(products)
        if (result) {
            res.status(200).send("Updated")
        } else {
            res.status(400).send("product not found")
        }
    } catch (error) {
        next(error)
    }
}

