import express from 'express';
import UserRouter from './routers/User.js';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', UserRouter);

// app.listen(4000, () => {
//   console.log('Server is running on port 4000');
// });
