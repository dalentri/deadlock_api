import * as cheerio from "cheerio";
import { parseHeroData } from "./parser";
import { heroBuilder } from "./builder/heroBuilder";
import { readdir } from "node:fs/promises";

// take html files that were fetched from deadlock wiki and parse them into json
export async function processHeroData(
  pathPrefix: string,
  heroesHtmlFiles: string[],
): Promise<any> {
  for (const heroFile of heroesHtmlFiles) {
    let heroData: any[] = [];

    const html: string = await Bun.file(pathPrefix + heroFile).text();
    const $ = cheerio.load(html);

    // Create an array of heroes with their full values
    const rawData: any[] = parseHeroData($, heroData, heroFile);

    // Put the hero values into the Hero interface to
    const heroJson = JSON.stringify(heroBuilder(rawData), null, 2);
    const heroJsonName = heroFile.replace(".html", ".json");
    Bun.write(`./data/charactersJson/` + heroJsonName, heroJson);
  }
}

// Runs on script call =====
const characterHtmlPathPrefix: string = "../data/charactersHtml/";
const heroHtmlFiles = await readdir(characterHtmlPathPrefix);

console.log("Parsing HTML and creating hero JSON files...");
processHeroData(characterHtmlPathPrefix, heroHtmlFiles);
