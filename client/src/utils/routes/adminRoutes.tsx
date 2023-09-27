import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../../pages/admin/loginPage';
import Panel from '../../pages/admin/panel';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<LoginPage/>} />
      <Route path="/" element={<LoginPage/>} />
      <Route path="/panel" element={<Panel/>} />
    </Routes>
  );
};

export default AdminRoutes;