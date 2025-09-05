import type { IValuesField } from "./types";

export const listCountries = [
  {
    id: 1,
    name: "Армения",
    code: "AM",
  },
  {
    id: 2,
    name: "Россия",
    code: "RU",
  },
  {
    id: 3,
    name: "Франция",
    code: "FR",
  },
  {
    id: 4,
    name: "Германия",
    code: "DE",
  },
  {
    id: 5,
    name: "Италия",
    code: "IT",
  },
  {
    id: 6,
    name: "Англия",
    code: "GB",
  },
  {
    id: 7,
    name: "Испания",
    code: "ES",
  },
  {
    id: 8,
    name: "Швейцария",
    code: "CH",
  },
  {
    id: 9,
    name: "Швеция",
    code: "SE",
  },
  {
    id: 10,
    name: "Дания",
    code: "DK",
  },
  {
    id: 11,
    name: "США",
    code: "US",
  },
  {
    id: 12,
    name: "Австралия",
    code: "AU",
  },
  {
    id: 13,
    name: "Австрия",
    code: "AT",
  },
  {
    id: 14,
    name: "Андорра",
    code: "AD",
  },
  {
    id: 15,
    name: "Бельгия",
    code: "BE",
  },
  {
    id: 16,
    name: "Болгария",
    code: "BG",
  },
  {
    id: 17,
    name: "Венгрия",
    code: "HU",
  },
  {
    id: 18,
    name: "Греция",
    code: "GR",
  },
  {
    id: 19,
    name: "Ирландия",
    code: "IE",
  },
  {
    id: 20,
    name: "Кипр",
    code: "CY",
  },
  {
    id: 21,
    name: "Латвия",
    code: "LV",
  },
  {
    id: 22,
    name: "Мальта",
    code: "MT",
  },
  {
    id: 23,
    name: "Нидерланды",
    code: "NL",
  },
  {
    id: 24,
    name: "Норвегия",
    code: "NO",
  },
  {
    id: 25,
    name: "Португалия",
    code: "PT",
  },
  {
    id: 26,
    name: "Польша",
    code: "PL",
  },
  {
    id: 27,
    name: "Чехия",
    code: "CZ",
  },
  {
    id: 28,
    name: "Канада",
    code: "CA",
  },
  {
    id: 29,
    name: "Мексика",
    code: "MX",
  },
  {
    id: 30,
    name: "Сальвадор",
    code: "SV",
  },
  {
    id: 31,
    name: "Бразилия",
    code: "BR",
  },
  {
    id: 32,
    name: "Парагвай",
    code: "PY",
  },
  {
    id: 33,
    name: "Уругвай",
    code: "UY",
  },
  {
    id: 34,
    name: "Алжир",
    code: "DZ",
  },
  {
    id: 35,
    name: "Аргентина",
    code: "AR",
  },
  {
    id: 36,
    name: "Беларусь",
    code: "BY",
  },
  {
    id: 37,
    name: "Израиль",
    code: "IL",
  },
  {
    id: 38,
    name: "Исландия",
    code: "IS",
  },
  {
    id: 39,
    name: "Китай",
    code: "CN",
  },
  {
    id: 40,
    name: "Литва",
    code: "LT",
  },
  {
    id: 41,
    name: "Латвия",
    code: "LV",
  },
  {
    id: 42,
    name: "Марокко",
    code: "MA",
  },
  {
    id: 43,
    name: "Румыния",
    code: "RO",
  },
  {
    id: 44,
    name: "Сан-Марино",
    code: "SM",
  },
  {
    id: 45,
    name: "Сербия",
    code: "RS",
  },
  {
    id: 46,
    name: "Таиланд",
    code: "TH",
  },
  {
    id: 47,
    name: "Украина",
    code: "UA",
  },
  {
    id: 48,
    name: "Финляндия",
    code: "FI",
  },
  {
    id: 49,
    name: "Хорватия",
    code: "HR",
  },
  {
    id: 50,
    name: "Чили",
    code: "CL",
  },
  {
    id: 51,
    name: "Эстония",
    code: "EE",
  },
  {
    id: 52,
    name: "Южная Африка",
    code: "ZA",
  },
  {
    id: 53,
    name: "Вьетнам",
    code: "VN",
  },
];

export const requestNewCountry = async (values: IValuesField) => {
  const response = await new Promise((resolve) => {
    const currentCountry = listCountries.filter(
      (country) => country.name === values.country
    );
    setTimeout(() => resolve(currentCountry), 1000);
  });

  return response;
};
