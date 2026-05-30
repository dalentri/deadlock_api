import { heroes } from "../data/character_list.ts";

const characterDataDestination = "data/characters/";
let currentHero: string;

// GET request for all up-to-date heroes
for (const hero of heroes) {
  currentHero = hero;

  const params = new URLSearchParams({
    action: "parse",
    format: "json",
    text: `{{infobox hero| key = ${currentHero}}}`,
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

  Bun.write(`${characterDataDestination}${currentHero}.json`, final_text);
}
