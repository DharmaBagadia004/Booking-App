import express, { Router } from "express"
import Hotel from "../models/Hotel.js"
import { createHotel, deleteHotel, getHotel, getallHotel, updateHotel } from "../controllers/hotel.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

//create
router.post("/", verifyAdmin,createHotel)

//update
router.put("/:id",verifyAdmin, updateHotel)

//delete
router.delete("/:id",verifyAdmin, deleteHotel)

//get
router.get("/:id", getHotel)

//get all hotel
router.get("/", getallHotel)


export default router