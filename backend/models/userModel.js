import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  dispute: { type: String, required: true },
  summary: { type: String, required: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  contact: String,
  disputeStartDate: Date,
  parties: String,
  resolution: String,
  information: String
}, {
  timestamps: true,
});

export default mongoose.model('User', userSchema);