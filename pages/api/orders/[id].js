import dbConnect from "../../../util/dbConnection"
import Order from '../../../models/Order'

async function handler(req, res) {

    await dbConnect()

    if(req.method === "GET"){
        try {
            const oneOrder = await Order.findById(req.query.id)
            res.status(200).json(oneOrder)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    if(req.method === "PUT"){
        try {
            const updatedData = await Order.findByIdAndUpdate(req.query.id, req.body, {new: true})
            res.status(201).json(updatedData)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    if(req.method === "DELETE"){
        try {
            await Order.findByIdAndDelete(req.query.id)
            res.status(200).json("The order has been cancled")
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default handler