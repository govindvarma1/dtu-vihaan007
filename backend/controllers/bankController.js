import Bank from "../models/Bank.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import BankPost from "../models/BankPost.js"
export const bankSingUp = async (req, res) => {
    try {
        // Extract data from request body
        const { bankName, password, email, phoneNumber, address, city, state, pincode } = req.body;

        // Check if the bank already exists
        const existingBank = await Bank.findOne({ bankName });
        if (existingBank) {
            return res.status(400).json({ message: "Bank already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newBank = new Bank({
            bankName,
            password: hashedPassword,
            email,
            phoneNumber,
            address,
            city,
            state,
            pincode
        });

        // Save the bank to the database
        await newBank.save();

        // Respond with success message
        return res.status(201).json({ message: "Bank created successfully" });
    } catch (error) {
        // Handle errors
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}


export const bankLogin = async (req, res, next) => {
    try {
        const { bankName, password } = req.body;
        const bank = await Bank.findOne({ bankName });

        if (!bank) {
            return res.status(404).json({ msg: "Bank does not exist." });
        } 

        const isMatch = await bcrypt.compare(password, bank.password);

        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials." });
        }

        const token = jwt.sign({ bank_id: bank._id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 });

        return res.status(200).json({ token, bank_id: bank._id });
    } catch (error) {
        next(error);
    }
}

export const announcePost = async (req, res) => {
    try {
        const { announcement, bloodGroupRequired, quantity } = req.body;

        // Get the bank ID from the req.user (assuming it's set by middleware)
        const bankId = req.user.bank_id;

        // Create a new bank post
        const newBankPost = new BankPost({
            announcement,
            bloodGroupRequired,
            quantity,
            postedBy: bankId // Assigning the bank ID to the postedBy field
        });

        // Save the new bank post to the database
        await newBankPost.save();

        // Update the associated Bank document with the new post ID
        await Bank.findByIdAndUpdate(bankId, { $push: { posts: newBankPost._id } });

        return res.status(201).json({ message: "Bank post announced successfully", postId: newBankPost._id });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
