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
}

export default handler