import fs from "fs/promises";
import path from "path";
import { IURLStatus } from "../../types";
import { CsvContent } from "./csv";
import { MarkdownContent } from "./markdown";

async function ensureOutputDir(): Promise<string> {
  const date = new Date().toISOString().split("T")[0];
  const outputDir = path.join(__dirname, "../../../output", date);
  await fs.mkdir(outputDir, { recursive: true });
  return outputDir;
}

export async function saveResults(results: IURLStatus[]) {
  const outputDir = await ensureOutputDir();
  const csvPath = path.join(outputDir, "results.csv");
  const mdPath = path.join(outputDir, "results.md");

  const csvContent = CsvContent(results);

  const mdContent = MarkdownContent(results);

  await Promise.all([
    fs.writeFile(csvPath, csvContent, { encoding: "utf8" }),
    fs.writeFile(mdPath, mdContent, { encoding: "utf8" }),
  ]);

  console.log(`Resultados salvos em: ${outputDir}`);
}
