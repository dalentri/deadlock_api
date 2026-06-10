import { Schema, model } from "mongoose";
import { Hero } from "../types/hero";

const heroSchema = new Schema<Hero>({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  weaponStats: {
    damagePerSecond: { type: Number, required: true },
    bulletDamage: { type: Number, required: true },
    pelletsPerShot: { type: Number, required: true },
    ammo: { type: Number, required: true },
    bulletsPerSec: { type: Number, required: true },
    reloadTime: { type: Number, required: true },
    bulletVelocity: { type: Number, required: true },
    lightMelee: { type: Number, required: true },
    heavyMelee: { type: Number, required: true },
  },
  vitalityStats: {
    health: { type: Number, required: true },
    healthRegen: { type: Number, required: true },
    moveSpeed: { type: Number, required: true },
    sprintSpeed: { type: Number, required: true },
    dashSpeed: { type: Number, required: true },
    stamina: { type: Number, required: true },
    staminaCooldown: { type: Number, required: true },
  },
  spiritPower: { type: Number, required: true },
});

export const HeroModel = model<Hero>("Hero", heroSchema);
