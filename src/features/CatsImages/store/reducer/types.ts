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


export type RootState = {
  cats: EntityState<CurrentCats, string>;
  favoritesCats: EntityState<CurrentCats, string>;
  comments: TStateCommentsSlice;
}
