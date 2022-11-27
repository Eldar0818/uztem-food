import dbConnect from "../../../util/dbConnection"
import Booking from "../../../models/Booking"

async function handler (req, res) {

    await dbConnect()

    if(req.method === "GET"){
        try {
            const allbookings = await Booking.find()
            res.status(200).json(allbookings)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    if(req.method === "POST"){
        try {
            const newBooking = await Booking.create(req.body)
            res.status(201).json(newBooking)
        } catch (error) {
            res.status(500).json(error)
        }
    }

}

export default handler