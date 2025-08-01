import { Navigate } from "react-router";
import type { LayoutComponent } from "./types";

export const PrivateRoute = ({ children }: LayoutComponent) => {
  const isAuth = localStorage.getItem("isAuth") === "true";

  return isAuth ? children : <Navigate to="/" />;
};
