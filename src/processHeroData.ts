import * as cheerio from "cheerio";
import { parseHeroData } from "./parser";
import { heroBuilder } from "./builder/heroBuilder";
import { readdir } from "node:fs/promises";

let allHeroData: any[] = [];

const pathPrefix = "../data/charactersHtml/";
const heroesHtmlFiles = await readdir(pathPrefix);

for (const heroFile of heroesHtmlFiles) {
  let heroData: any[] = [];

  const html: string = await Bun.file(pathPrefix + heroFile).text();
  const $ = cheerio.load(html);

  const rawData: any[] = parseHeroData($, heroData, heroFile);

  const heroJson = JSON.stringify(heroBuilder(rawData), null, 2);
  const heroJsonName = heroFile.replace(".html", ".json");
  Bun.write(`./data/charactersJson/` + heroJsonName, heroJson);
}
