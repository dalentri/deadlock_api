import { Router } from "express";
import characters from "./characters.ts";
import { Request, Response } from "express";

const mainRouter = Router();

mainRouter.use("/characters", characters);

mainRouter.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to Deadlock API!" });
});

export default mainRouter;
