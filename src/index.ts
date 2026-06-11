import mongoose from "mongoose";
import app from "./app";
import { initCache } from "./cacheBuilder";

// Start API at port 3000
async function startServer() {
  try {
    const port = 3000;
    const mongoUri = process.env.MONGO_URI || "mongodb://database:27017/app_db";

    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB.");

    await initCache();
    console.log("Cache implemented successfully.");

    app.listen(port, () => {
      console.log("Server initialized at port 3000.");
    });
  } catch (error) {
    console.log("Server failed to start:", error);
  }
}

startServer();
