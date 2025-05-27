import express from 'express';
import { createUserDispute } from '../controllers/userController.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();


router.post('/', upload.single('file'), createUserDispute);


export default router;