import { IURLStatus } from "../../types";

export function MarkdownContent(results: IURLStatus[]) {
  return [
    `# Resultado\n`,
    "| URL | Environment | Status | HTTP Status |",
    "| --- | ----------- | ------ | ----------- |",
    ...results.map(
      (r) => `| <${r.url}> | ${r.environment} | ${r.status} | ${r.httpStatus} |`
    ),
  ].join("\n");
}
