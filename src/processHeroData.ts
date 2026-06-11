import * as cheerio from "cheerio";
import { parseHeroData } from "./parser";
import { heroes } from "../data/character_list";
import { Hero } from "./types/hero";
import { HeroModel } from "./models/Hero";

// take html files that were fetched from deadlock wiki and parse them into json
export async function processHeroData(): Promise<any> {
  let bulkHeroes: any[] = [];

  for (const hero of heroes) {
    const params = new URLSearchParams({
      action: "parse",
      format: "json",
      text: `{{infobox hero| key = ${hero}}}`,
      title: "Heroes",
    });

    try {
      // Turn it into a percent encoded string
      const stringParams = params.toString();
      const url = `https://deadlock.wiki/api.php?${stringParams}`;
      const response = await fetch(url);
      const jsonResponse = await response.json();

      let html = jsonResponse.parse.text["*"];

      const $ = cheerio.load(html);

      const rawData: Hero = parseHeroData($, hero);

      bulkHeroes.push({
        updateOne: {
          filter: { slug: hero.toLowerCase().replaceAll(" ", "-") },
          update: { $set: rawData },
          upsert: true,
        },
      });
    } catch (networkError) {
      console.error(`[Error] Fetch failed for ${hero}`, networkError);
    }
  }
  await HeroModel.bulkWrite(bulkHeroes);
}
