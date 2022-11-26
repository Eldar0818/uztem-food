import dbConnect from "../../../util/dbConnection"
import Product from "../../../models/Product"

export default async function handler(req, res) {
    
 await dbConnect()

  if(req.method === "GET"){
    try {
      const singleProduct = await Product.findById(req.query.id)
      res.status(200).json(singleProduct)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  if(req.method === "DELETE"){
    try {
      await Product.findByIdAndDelete(req.query.id)
      res.status(200).json("Product has been deleted!")
    } catch (error) {
      res.status(500).json(error)
    }
  }

}
