const data = [
  { date: "10 окт", users: 30 },
  { date: "11 окт", users: 80 },
  { date: "12 окт", users: 50 },
  { date: "13 окт", users: 160 },
  { date: "14 окт", users: 40 },
  { date: "15 окт", users: 90 },
  { date: "16 окт", users: 340 },
];

export interface IAttendanceWeekUsers {
  date: string;
  users: number;
}

export const getAttendanceUsers = async (): Promise<IAttendanceWeekUsers[]> => {
  const resposne = await new Promise<IAttendanceWeekUsers[]>((resolve) =>
    resolve(data)
  );
  return resposne;
};
