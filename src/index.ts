import express from "express";
import { readFile } from "node:fs/promises";
import { readdir } from "node:fs/promises";
import { heroSummaryCache, heroFullDataIndex } from "../data/heroCache";

async function initCache() {
  const files = await readdir("../data/charactersJson/");

  for (const heroJsonFile in files) {
    const filePath = `../data/charactersJson/${heroJsonFile}`;
    const rawData = await readFile(filePath, "utf-8");

    const characterData = JSON.parse(rawData);

    const slug: string = characterData.name
      .strip()
      .toLowerCase()
      .replaceAll(" ", "-");

    const { name, damagePerSecond, health } = characterData;

    heroSummaryCache.push({ slug, name, damagePerSecond, health });
    heroFullDataIndex[slug] = characterData;
  }
}

// Start API at port 3000
async function startServer() {
  try {
    const app = express();
    const port = 3000;

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
