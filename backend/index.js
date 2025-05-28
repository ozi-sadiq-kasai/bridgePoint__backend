import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // import DB connection
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

dotenv.config(); // load env variables

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for all routes

// Connect to MongoDB first
connectDB();

 app.use('/api/disputes', userRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
