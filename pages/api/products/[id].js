import dbConnect from "../../../util/dbConnection"
import Product from "../../../models/Product"

export default async function handler(req, res) {
    
  dbConnect()

  if(req.method === "GET"){
    try {
      const singleProduct = await Product.findById(req.query.id)
      res.status(201).json(singleProduct)
    } catch (error) {
      res.status(500).json(error)
    }
  }

}
