export interface IBook {
  _id?: number | string;
  title: string;
  author: string;
  genre: string;
  publicationDate: number;
  reviews?: string[];
  finishedReading?: boolean;
}
