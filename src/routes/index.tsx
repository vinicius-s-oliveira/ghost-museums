import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "../layouts";
import { HomePage, LoginPage, RegistrationPage, ErrorPage } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
