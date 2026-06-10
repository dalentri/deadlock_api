import { readFile } from "node:fs/promises";
import { readdir } from "node:fs/promises";
import { heroSummaryCache, heroFullDataIndex } from "../data/heroCache";
import mongoose from "mongoose";
import app from "./app";

async function initCache(): Promise<any> {
  const files = await readdir(`${import.meta.dir}/../data/charactersJson/`);

  for (const heroJsonFile of files) {
    const filePath = `${import.meta.dir}/../data/charactersJson/${heroJsonFile}`;
    const rawData = await readFile(filePath, "utf-8");

    const characterData = JSON.parse(rawData);

    const slug: string = characterData.name
      .trim()
      .toLowerCase()
      .replaceAll(" ", "-");

    const {
      name,
      weaponStats: { damagePerSecond },
      vitalityStats: { health },
    } = characterData;

    heroSummaryCache.push({
      slug,
      name,
      weaponStats: { damagePerSecond },
      vitalityStats: { health },
    });
    heroFullDataIndex[slug] = characterData;
  }
}

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
