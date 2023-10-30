import { Route, Routes, useLocation } from "react-router-dom";

import LoginPage from "../../pages/admin/loginPage";

const LoginRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default LoginRoutes;
