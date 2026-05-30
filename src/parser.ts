import { readdir } from "node:fs/promises";
import * as cheerio from "cheerio";

const heroes_json_files: string[] = await readdir("./data/characters/");

for (const hero_file of heroes_json_files) {
  const html: string = await Bun.file(hero_file).text();
  const $ = cheerio.load(html);
}
