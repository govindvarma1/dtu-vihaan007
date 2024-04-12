import express from "express"
import { announcePost, bankLogin, bankSingUp } from "../controllers/bankController.js"
import { auth } from "../middleware/auth.js"

const router = express.Router()

router.post("/register",bankSingUp)
router.post("/login",bankLogin)
router.post("/announce",auth,announcePost)



export default router