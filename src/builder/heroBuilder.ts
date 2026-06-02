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
      falloffRange: heroData[10],
    },
    vitalityStats: {
      health: heroData[11],
      healthRegen: heroData[12],
      moveSpeed: heroData[13],
      sprintSpeed: heroData[14],
      dashSpeed: heroData[15],
      stamina: heroData[16],
      staminaCooldown: heroData[17],
    },
    spiritPower: heroData[18],
  };

  return hero;
}
