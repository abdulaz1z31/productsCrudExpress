import path from "path"
import fs from "fs"




const dirName = import.meta.dirname
const prouductFilePath = path.join(dirName,"..", "database", "products.json")


export const readProducts =() => {
    try {
        const products = fs.readFileSync(prouductFilePath, "utf8", (err) => {
            if (err) {
                return err
            }
        })  
        return JSON.parse(products)
    } catch (error) {
        return error
    }
}

export const writeProducts =(product) => {
    try {
        fs.writeFileSync(prouductFilePath, JSON.stringify(product, null, 4), (err) => {
            if (err) {
                throw new Error(err)
            } 
        })
        return true
    } catch (error) {
        return error
    }
}

export const createProducst =(products) => {
    try {
        const Products = fs.readFileSync(prouductFilePath, "utf8", (err) => {
            if (err) {
                return err
            } 
        })
    const allProducts = JSON.parse(Products)
    allProducts.push(products)
    fs.writeFileSync(prouductFilePath, JSON.stringify(allProducts, null, 4), (err) => {
        if (err) {
            throw new Error(err)
        } 
    })
    return true
    } catch (error) {
        return error
    }
}