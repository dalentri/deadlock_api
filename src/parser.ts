import { readdir } from "node:fs/promises";
import * as cheerio from "cheerio";

const path_prefix: string = "./data/characters/";
const heroes_json_files: string[] = await readdir(path_prefix);

for (const hero_file of heroes_json_files) {
  const html: string = await Bun.file(path_prefix + hero_file).text();
  const $ = cheerio.load(html);
}
