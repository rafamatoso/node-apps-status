import { IURLStatus } from "../../types";

export function CsvContent(results: IURLStatus[]) {
  return [
    "URL,Environment,Status,HTTP Status",
    ...results.map(
      (r) => `${r.url},${r.environment},${r.status},${r.httpStatus}`
    ),
  ].join("\n");
}
