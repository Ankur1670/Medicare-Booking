import express from 'express';
import { register, login } from '../Controllers/authControllers.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

export default router;  // Ensure this is a default export
