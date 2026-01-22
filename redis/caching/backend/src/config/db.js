import mongoose from "mongoose";

const connectDB = async (MONGO_URI) => {
  await mongoose.connect(MONGO_URI);
  console.log("MongoDB connected");
};

export default connectDB;
