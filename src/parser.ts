import { readdir } from "node:fs/promises";
import * as cheerio from "cheerio";

const pathPrefix: string = "./data/characters/";
const heroesHtmlFiles: string[] = await readdir(pathPrefix);
export const allHeroData: any[] = [];

for (const heroFile of heroesHtmlFiles) {
  let heroData: any[] = [];

  const html: string = await Bun.file(pathPrefix + heroFile).text();
  const $ = cheerio.load(html);

  const $heroName: string = heroFile.replace(".html", "");

  const $damagePerSecond: number = parseInt(
    $('a[title="Damage per second"]')
      .eq(1)
      .parent()
      .parent()
      .parent()
      .children("span")
      .eq(1)
      .prop("textContent") ?? "0",
    10,
  );

  const $bulletDamage: number = parseFloat(
    $('a[title="Bullet Damage"]')
      .eq(1)
      .parent()
      .parent()
      .parent()
      .children("span")
      .eq(1)
      .prop("textContent") ?? "0",
  );

  const $pelletsPerShot: number = parseFloat(
    $('a[title="Fire Rate"]')
      .closest("td")
      .children("span")
      .eq(1)
      .prop("textContent") ?? "0",
  );

  const $ammo: number = parseFloat(
    $('a[title="Ammo"]')
      .closest("td")
      .children("span")
      .eq(1)
      .prop("textContent") ?? "0",
  );

  const $bulletsPerSec: number = parseFloat(
    $('span:contains("Bullets per sec")')
      .closest("td")
      .next()
      .children("span")
      .eq(1)
      .prop("textContent") ?? "0",
  );

  const $reloadTime: number = parseFloat(
    $('span:contains("Reload Time")')
      .closest("td")
      .next()
      .children("span")
      .eq(1)
      .prop("textContent") ?? "0",
  );

  const $bulletVelocity: number = parseFloat(
    $('span:contains("Bullet Velocity")')
      .closest("td")
      .next()
      .children("span")
      .eq(1)
      .prop("textContent") ?? "0",
  );

  const $lightMelee: number = parseFloat(
    $('span:contains("Light Melee")')
      .closest("td")
      .next()
      .children("span")
      .eq(1)
      .prop("textContent") ?? "0",
  );

  const $heavyMelee: number = parseFloat(
    $('span:contains("Heavy Melee")')
      .closest("td")
      .next()
      .children("span")
      .eq(1)
      .prop("textContent") ?? "0",
  );

  const $falloffRange: string = (
    $('span:contains("Falloff Range")')
      .closest("td")
      .next()
      .children("span")
      .eq(1)
      .prop("textContent") ?? "0"
  ).trim();

  const $health: number = parseFloat(
    $('span:contains("Health")')
      .closest("td")
      .next()
      .children("span")
      .eq(1)
      .prop("textContent") ?? "0",
  );

  const $healthRegen: number = parseFloat(
    $('span:contains("Health Regen")')
      .closest("td")
      .next()
      .children("span")
      .eq(1)
      .prop("textContent") ?? "0",
  );

  const $moveSpeed: number = parseFloat(
    $('span:contains("Move Speed")')
      .closest("td")
      .next()
      .children("span")
      .eq(1)
      .prop("textContent") ?? "0",
  );

  const $sprintSpeed: number = parseFloat(
    $('span:contains("Sprint Speed")')
      .closest("td")
      .next()
      .children("span")
      .eq(1)
      .prop("textContent") ?? "0",
  );

  const $dashSpeed: number = parseFloat(
    $('span:contains("Dash Speed")')
      .closest("td")
      .next()
      .children("span")
      .eq(1)
      .prop("textContent") ?? "0",
  );

  const $stamina: number = parseFloat(
    $('span:contains("Stamina")')
      .closest("td")
      .next()
      .children("span")
      .eq(1)
      .prop("textcontent") ?? "0",
  );

  const $staminaCooldown: number = parseFloat(
    $('span:contains("Stamina Cooldown")')
      .closest("td")
      .next()
      .children("span")
      .eq(1)
      .prop("textContent") ?? "0",
  );

  const $spiritPower: number = parseFloat(
    $('span:contains("Spirit Power")')
      .closest("td")
      .next()
      .children("span")
      .eq(1)
      .prop("textContent") ?? "0",
  );

  heroData = [
    $heroName,
    $damagePerSecond,
    $bulletDamage,
    $pelletsPerShot,
    $ammo,
    $bulletsPerSec,
    $reloadTime,
    $bulletVelocity,
    $lightMelee,
    $heavyMelee,
    $falloffRange,
    $health,
    $healthRegen,
    $moveSpeed,
    $sprintSpeed,
    $dashSpeed,
    $stamina,
    $staminaCooldown,
    $spiritPower,
  ];

  allHeroData.push(heroData);
}
