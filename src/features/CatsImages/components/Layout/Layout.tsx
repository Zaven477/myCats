import { Header } from "../Header/Header";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};
