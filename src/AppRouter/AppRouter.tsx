import { BrowserRouter, Routes, Route } from "react-router";
import { Autorization } from "../features/CatsImages/components/Autorization/Autorization";
import { Layout } from "../features/CatsImages/components/Layout/Layout";
import { Cats } from "../features/CatsImages/components/Cats/Cats";
import { CatsSlides } from "../features/CatsImages/components/ CatsSlides/CatsSlides";
import { PrivateRoute } from "./PrivateRoute";
import { NotFoundPage } from "./NotFoundPage";
import { CatsTimer } from "../features/CatsImages/components/CatsTimer/CatsTimer";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Autorization />} />
        <Route
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route path="/cats">
            <Route index element={<Cats />} />
            <Route path="/cats/slides" element={<CatsSlides />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="/timer" element={<CatsTimer />}/>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
