import { Routes, Route } from "react-router-dom";
import Panel from "../../pages/admin/adminPanel/panel";
import { Box } from "@mui/material";
import AdminMenu from "../../components/adminMenu";
import ManagmentPanel from "../../pages/admin/managementPanel/managementPanel";
import PetsManagement from "../../pages/admin/managementPanel/petsManagement";
import DiseaseManagement from "../../pages/admin/managementPanel/diseaseManagement";
import IsolationManagement from "../../pages/admin/managementPanel/isolationManagement";
import VolunteerManagement from "../../pages/admin/managementPanel/volunteerManagement";
import AdoptionsManagement from "../../pages/admin/managementPanel/adoptionsManagement";
import ResourcesManagement from "../../pages/admin/managementPanel/resourcesManagement";
import GuestManagement from "../../pages/admin/managementPanel/guestManagement";
import PetManagement from "../../pages/admin/managementPanel/petManagement";
const AdminRoutes = () => {
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
        <Routes>
          <Route path="/panel" element={<Panel />} />
          <Route path="/management" element={<ManagmentPanel />} />
          <Route path="/management/animals" element={<PetsManagement />} />
          <Route path="/management/animals/:id" element={<PetManagement />} />
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
