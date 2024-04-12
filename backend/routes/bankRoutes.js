import express from "express"
import { announcePost, bankLogin, bankSingUp, fetchBankDetails } from "../controllers/bankController.js"
import { auth } from "../middleware/auth.js"

const router = express.Router()

router.post("/register",bankSingUp)
router.post("/login",bankLogin)
router.post("/announce",auth,announcePost)
router.get("/",auth,fetchBankDetails)



export default router