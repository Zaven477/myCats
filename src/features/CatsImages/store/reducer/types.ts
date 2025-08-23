import type { EntityState } from "@reduxjs/toolkit";
import type { CurrentCats } from "../../components/Cats/types";

export type TComments = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type TStateCommentsSlice = {
  comments: TComments[];
  loading: boolean;
  errors: string | null;
};

export type TUser = {
  name: string;
  login: string;
  password: string;
};

export type TStateUserProfileSlice = {
  users: null | TUser;
  error: string | null;
  loading: boolean;
};

export type RootState = {
  cats: EntityState<CurrentCats, string>;
  favoritesCats: EntityState<CurrentCats, string>;
  comments: TStateCommentsSlice;
  users: TStateUserProfileSlice;
};
