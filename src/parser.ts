import * as cheerio from "cheerio";
import { Hero } from "./types/hero";

export function parseHeroData($: cheerio.CheerioAPI, heroName: string): Hero {
  const slug: string = heroName.trim().toLowerCase().replaceAll(" ", "-");

  const name: string = heroName;

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
  return {
    slug: slug,
    name: name,
    weaponStats: {
      damagePerSecond: $damagePerSecond,
      bulletDamage: $bulletDamage,
      pelletsPerShot: $pelletsPerShot,
      ammo: $ammo,
      bulletsPerSec: $bulletsPerSec,
      reloadTime: $reloadTime,
      bulletVelocity: $bulletVelocity,
      lightMelee: $lightMelee,
      heavyMelee: $heavyMelee,
    },
    vitalityStats: {
      health: $health,
      healthRegen: $healthRegen,
      moveSpeed: $moveSpeed,
      sprintSpeed: $sprintSpeed,
      dashSpeed: $dashSpeed,
      stamina: $stamina,
      staminaCooldown: $staminaCooldown,
    },
    spiritPower: $spiritPower,
  };
}
