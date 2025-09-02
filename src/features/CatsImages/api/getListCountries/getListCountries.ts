import type { IResponseListCountries } from "./types";

const countries = [
  {
    id: 1,
    name: "Армения",
  },
  {
    id: 2,
    name: "Россия",
  },
  {
    id: 3,
    name: "Франция",
  },
  {
    id: 4,
    name: "Германия",
  },
  {
    id: 5,
    name: "Италия",
  },
  {
    id: 6,
    name: "Англия",
  },
  {
    id: 7,
    name: "Испания",
  },
  {
    id: 8,
    name: "Швейцария",
  },
  {
    id: 9,
    name: "Швеция",
  },
  {
    id: 10,
    name: "Дания",
  },
  {
    id: 11,
    name: "США",
  },
  {
    id: 12,
    name: "Австралия",
  },
  {
    id: 13,
    name: "Австрия",
  },
  {
    id: 14,
    name: "Андорра",
  },
  {
    id: 15,
    name: "Бельгия",
  },
  {
    id: 16,
    name: "Болгария",
  },
  {
    id: 17,
    name: "Венгрия",
  },
  {
    id: 18,
    name: "Греция",
  },
  {
    id: 19,
    name: "Ирландия",
  },
  {
    id: 20,
    name: "Кипр",
  },
  {
    id: 21,
    name: "Латвия",
  },
  {
    id: 22,
    name: "Мальта",
  },
  {
    id: 23,
    name: "Нидерланды",
  },
  {
    id: 24,
    name: "Норвегия",
  },
  {
    id: 25,
    name: "Португалия",
  },
  {
    id: 26,
    name: "Польша",
  },
  {
    id: 27,
    name: "Чехия",
  },
  {
    id: 28,
    name: "Канада",
  },
  {
    id: 29,
    name: "Мексика",
  },
  {
    id: 30,
    name: "Сальвадор",
  },
  {
    id: 31,
    name: "Бразилия",
  },
  {
    id: 32,
    name: "Парагвай",
  },
  {
    id: 33,
    name: "Уругвай",
  },
];

export const getCountries = async (): Promise<IResponseListCountries[]> => {
  const response = await new Promise<IResponseListCountries[]>((resolve) => {
    setTimeout(() => resolve(countries), 1000);
  });
  return response;
};
