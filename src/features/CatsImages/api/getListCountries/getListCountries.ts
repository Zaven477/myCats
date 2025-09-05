import type { IResponseListCountries } from "./types";

const countries = [
  {
    id: 1,
    name: "Армения",
    code: "AM",
  },
  {
    id: 2,
    name: "Россия",
    code: 'RU',
  },
  {
    id: 3,
    name: "Франция",
    code: 'FR'
  },
  {
    id: 4,
    name: "Германия",
    code: 'DE'
  },
  {
    id: 5,
    name: "Италия",
    code: 'IT'
  },
  {
    id: 6,
    name: "Англия",
    code: 'GB'
  },
  {
    id: 7,
    name: "Испания",
    code: 'ES'
  },
  {
    id: 8,
    name: "Швейцария",
    code: 'CH'
  },
  {
    id: 9,
    name: "Швеция",
    code: 'SE'
  },
  {
    id: 10,
    name: "Дания",
    code: 'DK'
  },
  {
    id: 11,
    name: "США",
    code: 'US'
  },
  {
    id: 12,
    name: "Австралия",
    code: 'AU'
  },
  {
    id: 13,
    name: "Австрия",
    code: 'AT'
  },
  {
    id: 14,
    name: "Андорра",
    code: 'AD'
  },
  {
    id: 15,
    name: "Бельгия",
    code: 'BE'
  },
  {
    id: 16,
    name: "Болгария",
    code: 'BG'
  },
  {
    id: 17,
    name: "Венгрия",
    code: 'HU'
  },
  {
    id: 18,
    name: "Греция",
    code: 'GR'
  },
  {
    id: 19,
    name: "Ирландия",
    code: 'IE'
  },
  {
    id: 20,
    name: "Кипр",
    code: 'CY'
  },
  {
    id: 21,
    name: "Латвия",
    code: 'LV'
  },
  {
    id: 22,
    name: "Мальта",
    code: 'MT'
  },
  {
    id: 23,
    name: "Нидерланды",
    code: 'NL'
  },
  {
    id: 24,
    name: "Норвегия",
    code: 'NO'
  },
  {
    id: 25,
    name: "Португалия",
    code: 'PT'
  },
  {
    id: 26,
    name: "Польша",
    code: 'PL'
  },
  {
    id: 27,
    name: "Чехия",
    code: 'CZ'
  },
  {
    id: 28,
    name: "Канада",
    code: 'CA'
  },
  {
    id: 29,
    name: "Мексика",
    code: 'MX'
  },
  {
    id: 30,
    name: "Сальвадор",
    code: 'SV'
  },
  {
    id: 31,
    name: "Бразилия",
    code: 'BR'
  },
  {
    id: 32,
    name: "Парагвай",
    code: 'PY'
  },
  {
    id: 33,
    name: "Уругвай",
    code: 'UY'
  },
];

export const getCountries = async (): Promise<IResponseListCountries[]> => {
  const response = await new Promise<IResponseListCountries[]>((resolve) => {
    setTimeout(() => resolve(countries), 1000);
  });
  return response;
};
