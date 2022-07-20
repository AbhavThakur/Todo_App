import mongoose from 'mongoose';

export const connectDatabase = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    var db = mongoose.connection;

    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
