import { readProducts, writeProducts} from "../service/product.service.js"
export const createProducst = (req, res, next) => {
  try {
    const result = writeProducts(req.body)
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
      const products = readProducts()
      res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}

export const getByIdProducst = (req, res, next) => {
  try {


  } catch (error) {
    next(error)
  }
}


export const updateByIdProducst = (req, res, next) => {
  try {


  } catch (error) {
    next(error)
  }
}


export const deleteByIdProducst = (req, res, next) => {
  try {


  } catch (error) {
    next(error)
  }
}