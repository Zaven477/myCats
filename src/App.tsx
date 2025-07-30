import { Autorization } from "./features/CatsImages/components/Autorization/Autorization";
import { PrivateRoute } from "./features/CatsImages/components/Autorization/PrivateRoute";
import { Layout } from "./features/CatsImages/components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Autorization />} />
        <Route
          path="/cats"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
