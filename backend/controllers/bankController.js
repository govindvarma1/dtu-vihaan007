import Bank from "../models/Bank.js";
import bcrypt from "bcrypt";


export const bankSingUp = async (req, res) => {
    try {
        // Extract data from request body
        const { bankName, password, } = req.body;

        // Check if the bank already exists
        const existingBank = await Bank.findOne({ bankName });
        if (existingBank) {
            return res.status(400).json({ message: "Bank already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new bank instance
        const newBank = new Bank({
            bankName,
            password: hashedPassword
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
