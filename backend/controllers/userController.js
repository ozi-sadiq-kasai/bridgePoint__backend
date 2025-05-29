import User from '../models/userModel.js';

// Create a new User Dispute
export const createUserDispute = async (req, res) => {
  try {
    const {
      dispute,
      summary,
      fname,
      lname,
      email,
      phone,
      contact,
      disputeStartDate,
      parties,
      resolution,
      information
    } = req.body;

    const userDispute = await User.create({
      dispute,
      summary,
      fname,
      lname,
      email,
      phone,
      contact,
      disputeStartDate,
      parties,
      resolution,
      information
    });

    res.status(200).json({
      message: 'User dispute submitted successfully',
      userDispute
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Error creating user dispute',
      error: err.message
    });
  }
};
