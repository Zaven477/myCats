const users = [
  {
    id: 1,
    firstName: "Георгий",
    lastName: "Иванов",
  },
  {
    id: 2,
    firstName: "Генадий",
    lastName: "Петров",
  },
  {
    id: 3,
    firstName: "Андрей",
    lastName: "Ковалев",
  },
  {
    id: 4,
    firstName: "Сергей",
    lastName: "Власов",
  },
  {
    id: 5,
    firstName: "Александр",
    lastName: "Еремин",
  },
  {
    id: 6,
    firstName: "Дмитрий",
    lastName: "Новиков",
  },
  {
    id: 7,
    firstName: "Станислав",
    lastName: "Иванов",
  },
  {
    id: 8,
    firstName: "Станислав",
    lastName: "Воронин",
  },
  {
    id: 9,
    firstName: "Николай",
    lastName: "Тихомиров",
  },
  {
    id: 10,
    firstName: "Григорий",
    lastName: "Быков",
  },
];

interface IUsers {
  id: number;
  firstName: string;
  lastName: string;
}

export const getData = async (): Promise<IUsers[]> => {
  const response = await new Promise<IUsers[]>((resolve) =>
    setTimeout(() => resolve(users), 1000)
  );
  return response;
};
