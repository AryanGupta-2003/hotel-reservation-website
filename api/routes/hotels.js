import express from "express";
/*import { login, register } from "../controllers/auth.js";*/

const router = express.Router();
router.post("/", async (req,res) => {
    res.send("hello,end");

    const newHotel = new Hotel(rew.body);

    try{
        const saveHotel = await newHotel.save();
        res.status(200).json(savedHotel)
    }catch(error){
        res.status(500).json(err);
    }
  })
/*
router.post("/register", register)
router.post("/login", login)
*/
export default router