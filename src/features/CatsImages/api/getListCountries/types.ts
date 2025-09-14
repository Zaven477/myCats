export type TImage = {
  id: number;
  url: string;
};

export interface IResponseListCountries {
  id: number;
  name: string;
  code: string;
  description: string;
  images: TImage[];
}
