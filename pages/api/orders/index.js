import dbConnect from "../../../util/dbConnection"
import Order from '../../../models/Order'

async function handler(req, res){

    await dbConnect()

    if(req.method === "GET"){
        try {
            const orders = await Order.find()
            res.status(200).json(orders)
        } catch (error) { 
            res.status(500).json(error)
        }
    }

    if(req.method === "POST"){
        try {
            const savedOrder = await Order.create(req.body)
            res.status(201).json(savedOrder)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default handler