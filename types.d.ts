type TDb = { db: Record<"books", IBook[]> };

export type TController = (
  req: import("express").Request & TDb,
  res: import("express").Response,
  next?: import("express").NextFunction
) => void;

export interface IBook {
  id: string;
  title: string;
  description: string;
  authors: string;
  favorite: boolean;
  fileCover: string;
  fileName: string;
  fileBook: string;
  countView: number;
}
