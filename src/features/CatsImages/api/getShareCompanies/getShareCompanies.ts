const data = [
  { name: "Apple", currentValue: 2500 },
  { name: "Samsung", currentValue: 1300 },
  { name: "Xiaomi", currentValue: 800 },
  { name: "Huawei", currentValue: 1500 },
  { name: "Vivo", currentValue: 3000 },
  { name: "Realme", currentValue: 1000 },
  { name: "Volvo", value: 2300 },
  { name: "Caterpillar", value: 1800 },
  { name: "Komatsu", value: 1400 },
  { name: "Hitachi", value: 700 },
  { name: "John Deere", value: 2100 },
  { name: "Kubota Corporation", value: 3200 },
];

export interface IShareCompanies {
  name: string;
  currentValue?: number;
  value?: number;
}

export const getShareCompanies = async (): Promise<IShareCompanies[]> => {
  const response = await new Promise<IShareCompanies[]>((resolve) =>
    resolve(data)
  );
  return response;
};
