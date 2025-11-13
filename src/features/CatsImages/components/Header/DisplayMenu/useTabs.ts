import {
  URL_CATS,
  URL_CATS_FAVORITES,
  URL_CATS_SLIDES,
  URL_COMMENTS,
  URL_CONTEXTUAL_SEARCH,
  URL_CURRENT_DASHBOARD,
  URL_CURRENT_PDF,
  URL_CURRENT_STATISTICS,
  URL_FILES,
  URL_INFINITE,
  URL_LIST_COUNTRIES,
  URL_LOGIN_PROFILE,
  URL_THEME,
  URL_TIMER,
} from "../../../../../constants";
import { useAppSelector } from "../../../store/reducer/hook";
import { currentFavoritesCats } from "../../../store/selectors";
import type { Tab } from "../types";

export const useTabs = () => {
  const favoritesCats = useAppSelector(currentFavoritesCats);

  const tabs: Tab[] = [
    {
      id: "cats",
      label: "Котики",
      path: `${URL_CATS}`,
      children: [
        {
          id: "all",
          label: "Все котики",
          path: `${URL_CATS}`,
        },
        {
          id: "favorites",
          label: "Любимые котики",
          path: `${URL_CATS_FAVORITES}`,
          badge: favoritesCats.length,
        },
      ],
    },
    {
      id: "slidesCats",
      label: "Слайды",
      path: `${URL_CATS_SLIDES}`,
    },
    {
      id: "catsTimer",
      label: "Таймер котиков",
      path: `${URL_TIMER}`,
    },
    {
      id: "comments",
      label: "Комментарии",
      path: `${URL_COMMENTS}`,
    },
    {
      id: "files",
      label: "Загрузка файлов",
      path: `${URL_FILES}`,
    },
    {
      id: "loginProfile",
      label: "Личный кабинет",
      path: `${URL_LOGIN_PROFILE}`,
    },
    {
      id: "countries",
      label: "Список стран",
      path: `${URL_LIST_COUNTRIES}`,
    },
    {
      id: "theme",
      label: "Изменение темы",
      path: `${URL_THEME}`,
    },
    {
      id: "infinite",
      label: "Бесконечная прокрутка",
      path: `${URL_INFINITE}`,
    },
     {
      id: "pdf",
      label: "Скачивание в формате PDF",
      path: `${URL_CURRENT_PDF}`,
    },
    {
      id: "statistics",
      label: "Статистика",
      path: `${URL_CURRENT_STATISTICS}`,
    },
    {
      id: "statisticsData",
      label: "Дашборд",
      path: `${URL_CURRENT_DASHBOARD}`,
    },
    {
      id: "contextualSearch",
      label: "Контекстный поиск",
      path: `${URL_CONTEXTUAL_SEARCH}`,
    },
  ];

  return { tabs };
};
