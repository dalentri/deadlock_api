import { heroes } from "../data/character_list.ts";

// GET request for all up-to-date heroes
async function getCharacterHtml(
  characterDataDestination: string,
): Promise<any> {
  for (const hero of heroes) {
    const params = new URLSearchParams({
      action: "parse",
      format: "json",
      text: `{{infobox hero| key = ${hero}}}`,
      title: "Heroes",
    });

    // Turn it into a percent encoded string
    params.toString();

    // Append it to the end of the API request
    const url = `https://deadlock.wiki/api.php?${params}`;

    const response = await fetch(url);
    const html = await response.text();

    const final = JSON.parse(html);
    let finalText = final.parse.text["*"];
  }
}
