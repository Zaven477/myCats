export type TValuesFields = {
  name: string;
  lastName: string;
  email: string;
};

export type TFields = {
  name: keyof TValuesFields;
  type: string;
  title: string;
};


