import { parseHeroData } from "./parser";
import { heroBuilder } from "./builder/heroBuilder";
import { readdir } from "node:fs/promises";
import * as cheerio from "cheerio";
import express from "express";

const app = express();
const port = 3000;

// Start API at port 3000
app.listen(port, () => {
  console.log("Server initialized.");
});
