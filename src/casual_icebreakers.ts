import fs from "fs";
export const ci = JSON.parse(fs.readFileSync("casual_icebreakers.json").toString()).ci;
