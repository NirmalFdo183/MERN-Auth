import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ Database connected successfully");
  } catch (e) {
    console.error("❌ Database connection failed:", e.message);
  }
};

export default connectDB;
