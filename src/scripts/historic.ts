import fs from "fs/promises";
import path from "path";

async function saveResultsToHistory() {
  const outputRoot = path.join(__dirname, "../../output");
  const historyPath = path.join(outputRoot, "historic.csv");

  const folders = await fs.readdir(outputRoot);

  const csvFiles = folders
    .filter((folder) => folder.match(/^\d{4}-\d{2}-\d{2}$/))
    .map((folder) => path.join(outputRoot, folder, "results.csv"));

  let historyContent = "Date,URL,Environment,Status,HTTP Status\n";

  for (const filePath of csvFiles) {
    try {
      const date = path.basename(path.dirname(filePath));

      const content = await fs.readFile(filePath, "utf8");

      const lines = content.split("\n").slice(1);

      historyContent +=
        lines.map((line) => `${date},${line}`).join("\n") + "\n";
    } catch (err) {
      console.error(`Erro ao processar ${filePath}:`, err);
    }
  }

  await fs.writeFile(historyPath, historyContent.trim(), "utf8");

  console.log(`Histórico salvo em: ${historyPath}`);
}

saveResultsToHistory();
