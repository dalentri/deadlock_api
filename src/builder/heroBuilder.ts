import { Hero } from "../types/hero";

export function heroBuilder(heroData: any[]) {
  const hero: Hero = {
    name: heroData[0],
    weaponStats: {
      damagePerSecond: heroData[1],
      bulletDamage: heroData[2],
      pelletsPerShot: heroData[3],
      ammo: heroData[4],
      bulletsPerSec: heroData[5],
      reloadTime: heroData[6],
      bulletVelocity: heroData[7],
      lightMelee: heroData[8],
      heavyMelee: heroData[9],
    },
    vitalityStats: {
      health: heroData[10],
      healthRegen: heroData[11],
      moveSpeed: heroData[12],
      sprintSpeed: heroData[13],
      dashSpeed: heroData[14],
      stamina: heroData[15],
      staminaCooldown: heroData[16],
    },
    spiritPower: heroData[17],
  };

  return hero;
}
