import { IURLEntry } from "./types";
import { showLoadingAnimation } from "./utils/cli";
import { urls } from "./utils/data";
import { saveResults } from "./utils/files/";
import { checkUrlStatus } from "./utils/network";

async function checkUrls(urls: IURLEntry[]) {
  console.time("Tempo de execução");
  const loading = showLoadingAnimation();
  const results = await Promise.all(urls.map(checkUrlStatus));
  clearInterval(loading);
  process.stdout.write("\r\n");
  console.table(results);
  await saveResults(results);
  console.timeEnd("Tempo de execução");
}

checkUrls(urls);
