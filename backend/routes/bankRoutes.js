import express from "express"
import { bankSingUp } from "../controllers/bankController.js"

const router = express.Router()

router.post("/register",bankSingUp)




export default router