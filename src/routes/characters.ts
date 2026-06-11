import express from "express";
import { Request, Response } from "express";
import { HeroModel } from "../models/Hero";
import { getCache } from "../cacheBuilder";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  res.json(await getCache());
});

router.get("/:character", async (req: Request, res: Response) => {
  let characterKey = req.params.character as string;
  const cleanCharacterKey = characterKey.trim().toLowerCase().replace(" ", "-");
  const hero = await HeroModel.findOne({ slug: cleanCharacterKey });

  if (hero) {
    res.json(hero);
  } else {
    res.status(404).json({ message: "Character name not found." });
  }
});

export default router;
