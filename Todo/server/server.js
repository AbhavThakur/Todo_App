import { config } from 'dotenv';
import { app } from './app.js';
import { connectDatabase } from './config/database.js';

config({
  path: './config/config.env',
});

connectDatabase();

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running on port ' + process.env.PORT);
});
