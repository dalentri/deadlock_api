import { parseHeroData } from "./parser";
import { heroBuilder } from "./builder/heroBuilder";

const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("Server initialized.");
});

export async function processHeroData(
  pathPrefix: string,
  heroesHtmlFiles: string[],
  allHeroData: any[],
): Promise<any[]> {
  for (const heroFile of heroesHtmlFiles) {
    let heroData: any[] = [];

    const html: string = await Bun.file(pathPrefix + heroFile).text();
    const $ = cheerio.load(html);

    heroData = parseHeroData($, heroData, heroFile);

    allHeroData.push(heroData);
  }
  return allHeroData;
}
