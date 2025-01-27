import { IURLEntry, IURLStatus } from "../types";

export async function checkUrlStatus({
  environment,
  url,
}: IURLEntry): Promise<IURLStatus> {
  try {
    const response = await fetch(url, { method: "HEAD" });
    const status = response.status === 401 ? "🔐" : response.ok ? "✅" : "⛔️";
    return {
      url,
      environment,
      status,
      httpStatus: response.status,
    };
  } catch (error) {
    console.log(error);

    const status =
      error instanceof Response ? (error.status === 401 ? "🔐" : "⛔️") : "⛔️";

    return {
      url,
      environment,
      status,
      httpStatus: error instanceof Response ? error.status : "-",
    };
  }
}
