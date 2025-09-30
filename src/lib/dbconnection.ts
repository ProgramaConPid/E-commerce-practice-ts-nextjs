import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

// Connection with mongodb atlas database sample_mflix
const connectDB = async () => {
  try {
    // Wait the connection with the URL provided by mongodb atlas
    await mongoose.connect(process.env.MONGODB_URI!)
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

// Export the connection
export default connectDB