import User from '../models/userModel.js';

// Create a new User Dispute
export const createUserDispute = async (req, res) => {
    try {
        const data = {
            ...req.body,
            file: req.file ? req.file.filename: null, // Handle file upload if present          
        }
        const userDispute = await User.create(data);
        res.status(200).json({ message: 'User dispute submitted successfully', userDispute });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating user dispute', error: err.message });
    }
}