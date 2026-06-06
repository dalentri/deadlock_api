import express from "express";
import { heroSummaryCache, heroFullDataIndex } from "../../data/heroCache";
import { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.json(heroSummaryCache);
});

router.get("/:character", (req: Request, res: Response) => {
  let characterKey = req.params.character as string;
  const cleanCharacterKey = characterKey.trim().toLowerCase().replace(" ", "-");

  if (heroFullDataIndex[cleanCharacterKey]) {
    res.json(heroFullDataIndex[cleanCharacterKey]);
  } else {
    res.status(404).json({ message: "Character name not found." });
  }
});

export default router;
