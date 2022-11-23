import dbConnect from "../../../util/dbConnection"
import Product from "../../../models/Product"

export default async function handler(req, res) {
    
  await dbConnect()

  if(req.method === "GET"){
    try {
      const allProducts = await Product.find()
      res.status(200).json(allProducts)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  if(req.method === "POST"){
    try {
      const newProduct = await Product.create(req.body)
       res.status(201).json(newProduct)
    } catch (error) {
      res.status(500).json(error)
    }
  }  
}
