export interface Hero {
  name: string;
  weapon_stats: [
    damage_per_second: number,
    bullet_damage: number,
    pellets_per_shot: number,
    ammo: number,
    bullets_per_sec: number,
    reload_time: number,
    bullet_velocity: number,
    light_melee: number,
    heavy_melee: number,
    falloff_range: string,
  ];
  vitality_stats: [
    health: number,
    health_regen: number,
    move_speed: number,
    sprint_speed: number,
    dash_speed: number,
    stamina: number,
    stamina_cooldown: number,
  ];
  spirit_power: number;
}
