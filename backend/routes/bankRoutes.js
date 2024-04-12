import express from "express"
import { addBloodAvailability, announcePost, bankLogin, bankSingUp, deletePost, fetchBankDetails, updateBloodAvailability } from "../controllers/bankController.js"
import { auth } from "../middleware/auth.js"

const router = express.Router()

router.post("/register",bankSingUp)
router.post("/login",bankLogin)
router.post("/announce",auth,announcePost)
router.get("/",auth,fetchBankDetails)
router.delete("/:postId",auth,deletePost)
router.post("/add-blood",auth,addBloodAvailability)
router.patch("/update-blood",auth,updateBloodAvailability)



export default router