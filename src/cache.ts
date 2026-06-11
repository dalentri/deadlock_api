import { HeroModel } from "./models/Hero";

let heroSummaryCache: any[] = [];

export async function initCache(): Promise<any> {
  const heroes = await HeroModel.find({}, { slug: 1, name: 1 }).lean();
  heroSummaryCache = heroes;
}

export async function getCache(): Promise<any[]> {
  return heroSummaryCache;
}
