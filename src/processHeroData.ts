import * as cheerio from "cheerio";
import { parseHeroData } from "./parser";
import { heroBuilder } from "./builder/heroBuilder";

// take html files that were parsed from deadlock wiki and parse them into json
export async function processHeroData(
  pathPrefix: string,
  heroesHtmlFiles: string[],
): Promise<any> {
  let allHeroData: any[] = [];

  for (const heroFile of heroesHtmlFiles) {
    let heroData: any[] = [];

    const html: string = await Bun.file(pathPrefix + heroFile).text();
    const $ = cheerio.load(html);

    const rawData: any[] = parseHeroData($, heroData, heroFile);

    const heroJson = JSON.stringify(heroBuilder(rawData), null, 2);
    const heroJsonName = heroFile.replace(".html", ".json");
    Bun.write(`./data/charactersJson/` + heroJsonName, heroJson);
  }
  return allHeroData;
}
