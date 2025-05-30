import express from 'express';
import { createUserDispute } from '../controllers/userController.js';

const router = express.Router();

router.post('/', createUserDispute);

export default router;