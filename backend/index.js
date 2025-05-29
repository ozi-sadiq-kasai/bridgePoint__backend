import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // import DB connection
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js'; // Import admin routes
import cors from 'cors';

dotenv.config(); // load env variables

const allowedOrigins = ['http://localhost:5173', 'https://www.bridgepointodr.com','https://bridgepointodr.com'];

const app = express();
// Connect to MongoDB first
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));


//ROUTES
 app.use('/api/disputes', userRoutes);
 app.use('/api/admin', adminRoutes); 


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
