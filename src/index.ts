import { parseHeroData } from "./parser";
import { heroBuilder } from "./builder/heroBuilder";
import { readdir } from "node:fs/promises";
import * as cheerio from "cheerio";

const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("Server initialized.");
});

const heroHtmlPathPrefix = "./data/charactersHtml/";
const heroHtmlFiles = await readdir("./data/charactersHtml");

export async function processHeroData(
  pathPrefix: string,
  heroesHtmlFiles: string[],
): Promise<any> {
  for (const heroFile of heroesHtmlFiles) {
    let heroData: any[] = [];

    const html: string = await Bun.file(pathPrefix + heroFile).text();
    const $ = cheerio.load(html);

    const rawData: any[] = parseHeroData($, heroData, heroFile);

    const heroJson = JSON.stringify(heroBuilder(rawData), null, 2);
    const heroJsonName = heroFile.replace(".html", ".json");
    Bun.write(`./data/charactersJson/` + heroJsonName, heroJson);
  }
}

processHeroData(heroHtmlPathPrefix, heroHtmlFiles);
