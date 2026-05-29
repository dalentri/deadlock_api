import { heroes } from "../data/character_list.ts";

const characterDataDestination = "data/cache/characters/";
let current_hero: string;

// GET request for all up-to-date heroes
for (let i = 0; i < heroes.length; i++) {
  current_hero = heroes[i];

  const params = new URLSearchParams({
    action: "parse",
    format: "json",
    text: `{{infobox hero| key = ${current_hero}}}`,
    title: "Heroes",
  });

  // Turn it into a percent encoded string
  params.toString();

  // Append it to the end of the API request
  const url = `https://deadlock.wiki/api.php?${params}`;

  const response = await fetch(url);
  const html = await response.text();

  const final = JSON.parse(html);
  let final_text = final.parse.text["*"];

  Bun.write(`${characterDataDestination}${current_hero}.json`, final_text);
}
