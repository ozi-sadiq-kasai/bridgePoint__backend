import User from '../models/user.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (err) {
        console.error('Error fetching users:', error.message);
          res.status(500).json({ message: 'Server Error' });
    }
}