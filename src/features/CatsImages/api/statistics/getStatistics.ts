export const data = [
  { day: "Пн", users: 120 },
  { day: "Вт", users: 100 },
  { day: "Ср", users: 250 },
  { day: "Чт", users: 140 },
  { day: "Пт", users: 160 },
  { day: "Сб", users: 80 },
  { day: "Вс", users: 300 },
];

export interface IStatistics  {
  day: string;
  users: number;
};

export const getStatistics = async (): Promise<IStatistics[]> => {
  const response = await new Promise<IStatistics[]>((resolve) =>
    resolve(data)
  );
  return response;
};
