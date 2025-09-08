import { BrowserRouter, Routes, Route } from "react-router";
import { Autorization } from "../features/CatsImages/components/Autorization/Autorization";
import { Layout } from "../features/CatsImages/components/Layout/Layout";
import { Cats } from "../features/CatsImages/components/Cats/Cats";
import { CatsSlides } from "../features/CatsImages/components/ CatsSlides/CatsSlides";
import { PrivateRouteCats, PrivateRouteUser } from "./PrivateRoute";
import { NotFoundPage } from "./NotFoundPage";
import { CatsTimer } from "../features/CatsImages/components/CatsTimer/CatsTimer";
import { CurrentsComments } from "../features/CatsImages/components/CurrentsComments/CurrentsComments";
import { CurrentsFiles } from "../features/CatsImages/components/CurrentsFiles/CurrentsFiles";
import { LoginFormProfile } from "../features/CatsImages/components/LoginFormProfile/LoginFormProfile";
import { UserProfile } from "../features/CatsImages/components/UserProfile/UserProfile";
import { Countries } from "../features/CatsImages/components/Countries/Countries";
import { Panel } from "../features/CatsImages/components/Panel/Panel";
import { DescriptionCountry } from "../features/CatsImages/components/Countries/DescriptionCountry/DescriptionCountry";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Autorization />} />
        <Route element={<Layout />}>
          <Route
            path="/cats"
            element={
              <PrivateRouteCats>
                <Cats />
              </PrivateRouteCats>
            }
          />
          <Route path="/cats/slides" element={<CatsSlides />} />
          <Route path="/timer" element={<CatsTimer />} />
          <Route path="/comments" element={<CurrentsComments />} />
          <Route path="/files" element={<CurrentsFiles />} />
          <Route path="/loginProfile" element={<LoginFormProfile />} />
          <Route
            path="/loginProfile/user"
            element={
              <PrivateRouteUser>
                <UserProfile />
              </PrivateRouteUser>
            }
          />
          <Route path="/countries" element={<Countries />}/>
          <Route path="/countries/:currentId" element={<DescriptionCountry />}/>
          <Route path="/themes" element={<Panel />}/>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
