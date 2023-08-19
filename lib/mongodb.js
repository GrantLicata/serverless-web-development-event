import mongoose from "mongoose";

// Database connector using identification
const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Database Connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
