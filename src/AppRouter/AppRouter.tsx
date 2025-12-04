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
import { ListCatsInfinite } from "../features/CatsImages/components/ListCatsInfinite/ListCatsInfinite";
import { EditableInput } from "../features/CatsImages/components/EditableInput/EditableInput";
import { DashboardUsers } from "../features/CatsImages/components/DashboardUsers/DashboardUsers";
import { Dashboard } from "../features/CatsImages/components/Dashboard/Dashboard";
import { UsersFiltering } from "../features/CatsImages/components/MatchFiltering/MatchFiltering";
import { ImagesSlides } from "../features/CatsImages/components/ImagesSlides/ImagesSlides";

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
          <Route path="/countries" element={<Countries />} />
          <Route
            path="/countries/:currentId"
            element={<DescriptionCountry />}
          />
          <Route path="/themes" element={<Panel />} />
          <Route path="/infinite/cats" element={<ListCatsInfinite />} />
          <Route path="/current_pdf" element={<EditableInput />} />
          <Route path="/current_statistics" element={<DashboardUsers />} />
          <Route path="/current_dashboard" element={<Dashboard />} />
          <Route path="/contextualSearch" element={<UsersFiltering />} />
          <Route path="/countries-slides" element={<ImagesSlides />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
