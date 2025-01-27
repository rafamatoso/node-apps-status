export interface IURLStatus {
  url: string;
  environment: string;
  status: string;
  httpStatus: number | string;
}

export interface IURLEntry {
  url: string;
  environment: "DS" | "QS" | "PROD";
}
