import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import userRoutes from './routes/userRoutes.js'; // ✅ Import your route

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ✅ Middleware to parse incoming JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Mount API route
app.use('/api/disputes', userRoutes);

// ✅ Serve frontend
app.use(express.static(path.join(__dirname, 'frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/dist/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
