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


export const fetchBankDetails = async (req, res) => {
    try {
        // Extract bank identifier from request parameters or body
        const bankId = req.user.bank_id; // Assuming bankId is provided as a URL parameter

        // Retrieve bank details from the database
        const bank = await Bank.findById(bankId).populate('posts');;

        // Check if bank exists
        if (!bank) {
            return res.status(404).json({ message: "Bank not found" });
        }

        // Return bank details
        return res.status(200).json({ bank });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const deletePost=async(req,res)=>{
    try {
        // Extract post ID from request parameters
        const postId = req.params.postId;

        // Find the post by ID and delete it
        const deletedPost = await BankPost.findByIdAndDelete(postId);

        // Check if the post exists
        if (!deletedPost) {
            return res.status(404).json({ message: "Post not found" });
        }

        // Update the associated bank document to remove the post ID from its 'posts' array
        const bankId = req.user.bank_id; // Assuming bank_id is stored in req.user
        await Bank.findByIdAndUpdate(bankId, { $pull: { posts: postId } });

        // Return success message
        return res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const addBloodAvailability = async (req, res) => {
    try {
        const { bloodGroup, units } = req.body;
        const bankId = req.user.bank_id;

        // Find the bank by ID
        const bank = await Bank.findById(bankId);

        // Check if the bank exists
        if (!bank) {
            return res.status(404).json({ message: "Bank not found" });
        }

        // Update blood availability for the specified blood group
        bank.bloodAvailability.set(bloodGroup, units);

        // Save the updated bank document
        await bank.save();

        return res.status(200).json({ message: "Blood availability updated successfully", bank });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const updateBloodAvailability = async (req, res) => {
    try {
        const { operation, bloodGroup, units } = req.body;
        const bankId = req.user.bank_id;

        // Find the bank by ID
        const bank = await Bank.findById(bankId);

        // Check if the bank exists
        if (!bank) {
            return res.status(404).json({ message: "Bank not found" });
        }

        // Get the current blood availability for the specified blood group
        let currentUnits = bank.bloodAvailability.get(bloodGroup) || 0;

        // Update blood availability based on the operation
        if (operation === "increase") {
            currentUnits += units;
        } else if (operation === "decrease") {
            currentUnits -= units;
            if (currentUnits < 0) {
                return res.status(400).json({ message: "Insufficient blood units" });
            }
        } else {
            return res.status(400).json({ message: "Invalid operation" });
        }

        // Update blood availability for the specified blood group
        bank.bloodAvailability.set(bloodGroup, currentUnits);

        // Save the updated bank document
        await bank.save();

        return res.status(200).json({ message: "Blood quantity updated successfully", bank });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};