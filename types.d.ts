export type TController = (
  req: import("express").Request,
  res: import("express").Response
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
