const data = [
  { date: "10окт", profitMagnet: 120, profitGlobe: 50 },
  { date: "11окт", profitMagnet: 180, profitGlobe: 100 },
  { date: "12окт", profitMagnet: 200, profitGlobe: 230 },
  { date: "13окт", profitMagnet: 140, profitGlobe: 60 },
  { date: "14окт", profitMagnet: 230, profitGlobe: 85 },
  { date: "15окт", profitMagnet: 80, profitGlobe: 400 },
  { date: "16окт", profitMagnet: 20, profitGlobe: 1000 },
];

export interface IDataGlobe {
  date: string;
  profitGlobe: number;
}

export interface IDataMagnet {
  date: string;
  profitMagnet: number;
}

export type IDataMagnetGlobe = IDataMagnet | IDataGlobe;

export const getProfitsRetails = async (): Promise<IDataMagnetGlobe[]> => {
  const response = await new Promise<IDataMagnetGlobe[]>((resolve) =>
    resolve(data)
  );
  return response;
};
