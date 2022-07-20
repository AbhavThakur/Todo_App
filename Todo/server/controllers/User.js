import { User } from '../models/users.js';
import { sendMail } from '../utils/sendMail.js';
import { sendToken } from '../utils/sendToken.js';

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // const { avatar } = req.files;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res
        .status(400)
        .json({ success: false, message: 'User already exists' });
    }

    const otp = Math.round(Math.random() * 1000000);

    const userData = await User.create({
      name,
      email,
      password,
      avatar: {
        public_id: '',
        url: '',
      },
      otp,
      otp_exipry: new Date(Date.now() + process.env.OTP_EXPIRE * 60 * 1000),
    });

    await sendMail(email, 'Verify your account', `Your OTP is ${otp}`);
    sendToken(
      res,
      userData,
      200,
      'OTP Sent to your email,please verify account'
    );
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
