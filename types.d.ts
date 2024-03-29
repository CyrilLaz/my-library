export type TController = (
  req: import("express").Request,
  res: import("express").Response,
  next?:import("express").NextFunction
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
}
