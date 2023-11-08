import mongoose from "mongoose";

export const connectDB = async () => {
  console.log("Connecting to database...");
  const mongoUri = process.env.MONGO_URI;

  if (mongoose.connection.readyState === 1) {
    return;
  }

  mongoose.set("strictQuery", false);
  if (mongoUri === undefined) {
    throw new Error("The MONGO_URI environment variable is not defined.");
  }

  await mongoose.connect(mongoUri);
  console.log("Connected to database!");

  process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("disconnected from database!");
    process.exit(0);
  });
};
