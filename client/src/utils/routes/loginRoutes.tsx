import { Routes, Route } from 'react-router-dom';
import LoginPage from '../../pages/admin/loginPage';
const LoginRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
    </Routes>
  );
};

export default LoginRoutes;