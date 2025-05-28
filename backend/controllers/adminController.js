import User from '../models/userModel.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (err) {
        console.error('Error fetching users:', err.message);
          res.status(500).json({ message: 'Server Error' });
    }
}