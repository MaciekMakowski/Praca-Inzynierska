import { Route, Routes, useLocation } from "react-router-dom";

import AdminMenu from "../../components/adminMenu";
import AdoptionsManagement from "../../pages/admin/managementPanel/adoptionsManagement";
import { Box } from "@mui/material";
import DiseaseManagement from "../../pages/admin/managementPanel/diseaseManagement";
import GuestManagement from "../../pages/admin/managementPanel/guestManagement";
import IsolationManagement from "../../pages/admin/managementPanel/isolationManagement";
import ManagmentPanel from "../../pages/admin/managementPanel/managementPanel";
import Panel from "../../pages/admin/adminPanel/panel";
import PetManagement from "../../pages/admin/managementPanel/petManagement";
import PetsManagement from "../../pages/admin/managementPanel/petsManagement";
import ResourcesManagement from "../../pages/admin/managementPanel/resourcesManagement";
import VolunteerManagement from "../../pages/admin/managementPanel/volunteerManagement";
import { puszekData } from "../mockups/diagData";

const AdminRoutes = () => {
  const location = useLocation();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "800px",
          height: "100vh",
          display: "flex",
        }}
      >
        <AdminMenu />
        <Routes location={location} key={location.pathname}>
          <Route path="/panel" element={<Panel />} />
          <Route path="/management" element={<ManagmentPanel />} />
          <Route path="/management/animals" element={<PetsManagement />} />
          <Route path="/management/animals/:id" element={<PetManagement data={puszekData} />} />
          <Route path="/management/diseases" element={<DiseaseManagement />} />
          <Route
            path="/management/isolations"
            element={<IsolationManagement />}
          />
          <Route
            path="/management/volunteers"
            element={<VolunteerManagement />}
          />
          <Route
            path="/management/adoptions"
            element={<AdoptionsManagement />}
          />
          <Route
            path="/management/resources"
            element={<ResourcesManagement />}
          />
          <Route path="/management/guests" element={<GuestManagement />} />
        </Routes>
      </Box>
    </>
  );
};

export default AdminRoutes;
