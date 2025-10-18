const data = [
  {
    year: "2018",
    profitBrain: 200,
    profitLuxoft: 600,
  },
  {
    year: "2019",
    profitBrain: 250,
    profitLuxoft: 400,
  },
  {
    year: "2020",
    profitBrain: 1200,
    profitLuxoft: 140,
  },
  {
    year: "2021",
    profitBrain: 380,
    profitLuxoft: 400,
  },
  {
    year: "2022",
    profitBrain: 2300,
    profitLuxoft: 1200,
  },
  {
    year: "2023",
    profitBrain: 1000,
    profitLuxoft: 900,
  },
  {
    year: "2024",
    profitBrain: 700,
    profitLuxoft: 2400,
  },
];

export interface IProfitCompanies {
  year: string;
  profitBrain: number;
  profitLuxoft: number;
}

export const getProfitCompanies = async (): Promise<IProfitCompanies[]> => {
  const response = await new Promise<IProfitCompanies[]>((resolve) =>
    resolve(data)
  );
  return response;
};
