export interface Hero {
  name: string;
  weapon_stats: [
    damagePerSecond: number,
    bulletDamage: number,
    pelletsPerShot: number,
    ammo: number,
    bulletsPerSec: number,
    reloadTime: number,
    bulletVelocity: number,
    lightMelee: number,
    heavyMelee: number,
    falloffRange: string,
  ];
  vitality_stats: [
    health: number,
    healthRegen: number,
    moveSpeed: number,
    sprintSpeed: number,
    dashSpeed: number,
    stamina: number,
    staminaCooldown: number,
  ];
  spiritPower: number;
}
