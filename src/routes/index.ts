import { Router } from "express";
import characters from "./characters.ts";

const mainRouter = Router();

mainRouter.use("/characters", characters);

export default mainRouter;
