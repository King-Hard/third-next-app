import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("mongodb+srv://kingha4rd:Ha4rdHierarchy@cluster0.hzhnzb3.mongodb.net/blog_data");
  console.log("Database Connected!");
};



