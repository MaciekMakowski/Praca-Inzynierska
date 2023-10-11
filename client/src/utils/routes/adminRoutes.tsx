import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../../pages/admin/loginPage';
import Panel from '../../pages/admin/adminPanel/panel';
import { Box } from "@mui/material"
import AdminMenu from "../../components/adminMenu"
import ManagmentPanel from '../../pages/admin/managementPanel/managementPanel';
import PetsManagement from '../../pages/admin/managementPanel/pages/petsManagement';
const AdminRoutes = () => {
  return (
    <>
    <Box
        sx={{
          width:'100%', 
          height:'100vh',
          display:'flex',
        }}
      >
      <AdminMenu/>
    <Routes>
          <Route path="/panel" element={<Panel/>} />
          <Route path="/management" element={<ManagmentPanel/>} />
          <Route path='/management/animals' element={<PetsManagement/>} />  
    </Routes>
    </Box>
    </>
  );
};

export default AdminRoutes;