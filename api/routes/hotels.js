import express from "express";
/*import { login, register } from "../controllers/auth.js";*/
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
const router = express.Router();

router.post("/", createHotel);
  //update
router.put("/:id", updateHotel);
  //delete
  router.delete("/:id", deleteHotel);
  //get
  router.get("/:id", getHotel);
  //get all
  router.get("/",getHotels);
/*
router.post("/register", register)
router.post("/login", login)
*/
export default router;