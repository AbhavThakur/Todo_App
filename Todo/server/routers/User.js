import express from 'express';
import { register } from '../controllers/User.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Server is running' });
});

router.route('/register').post(register);

export default router;
