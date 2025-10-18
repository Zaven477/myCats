export type DataGlobe = {
  date: string;
  profitGlobe: number;
};

export type DataMagnet = {
  date: string;
  profitMagnet: number;
};

export type DataMagnetGlobe = DataMagnet | DataGlobe;
