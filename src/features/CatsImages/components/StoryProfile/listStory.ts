export const listStory = (dateUserLogin: string, dateLogOutUser: string) => {
  const currentDateUserLogin = new Date(dateUserLogin).toLocaleDateString(
    "ru-Ru"
  );
  const currentDateLogOut = new Date(dateLogOutUser).toLocaleDateString(
    "ru-Ru"
  );

  return [
    {
      id: 1,
      date: currentDateUserLogin,
      name: "Вход в систему",
    },
    {
      id: 4,
      date: currentDateLogOut,
      name: "Выход из системы",
    },
  ];
};
