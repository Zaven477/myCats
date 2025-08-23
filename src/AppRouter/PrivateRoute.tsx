import { Navigate } from "react-router";
import type { LayoutComponent } from "../features/CatsImages/components/Autorization/types";

export const PrivateRouteCats = ({ children }: LayoutComponent) => {
  const isAuth = localStorage.getItem("isAuth") === "true";

  return isAuth ? children : <Navigate to="/" />;
};

export const PrivateRouteUser = ({ children }: LayoutComponent) => {
  const currentUser = localStorage.getItem("user");

  return currentUser ? children : <Navigate to="/loginProfile" />;
};
