import fs from "fs/promises";

export async function readJson(filePath) {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function writeJson(filePath, data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}
