import { readdir } from "node:fs/promises";
import * as cheerio from "cheerio";

const path_prefix: string = "./data/characters/";
const heroesHtmlFiles: string[] = await readdir(path_prefix);

for (const hero_file of heroesHtmlFiles) {
  const html: string = await Bun.file(path_prefix + hero_file).text();
  const $ = cheerio.load(html);

  const $heroName = $("");
}
