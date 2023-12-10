import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { Box } from "@mui/material";
import AdminMenu from "../../components/adminMenu";
import Panel from "../../pages/admin/adminPanel/panel";
import LoginPage from "../../pages/admin/loginPage";
import AdoptionDetails from "../../pages/admin/managementPanel/adoptionDetails";
import AdoptionsManagement from "../../pages/admin/managementPanel/adoptionsManagement";
import DiseaseDetails from "../../pages/admin/managementPanel/diseaseDetails";
import DiseaseManagement from "../../pages/admin/managementPanel/diseaseManagement";
import GuestManagement from "../../pages/admin/managementPanel/guestManagement";
import IsolationDetails from "../../pages/admin/managementPanel/isolationDetails";
import IsolationManagement from "../../pages/admin/managementPanel/isolationManagement";
import ManagmentPanel from "../../pages/admin/managementPanel/managementPanel";
import MeetingDetails from "../../pages/admin/managementPanel/meetingDetails";
import MeetingManagement from "../../pages/admin/managementPanel/meetingManagement";
import PersonDetails from "../../pages/admin/managementPanel/personDetails";
import PetDiseaseDetails from "../../pages/admin/managementPanel/petDiseaseDetails";
import PetManagement from "../../pages/admin/managementPanel/petManagement";
import PetsManagement from "../../pages/admin/managementPanel/petsManagement";
import ResourceDetails from "../../pages/admin/managementPanel/resourceDetails";
import ResourcesManagement from "../../pages/admin/managementPanel/resourcesManagement";
import VolunteerManagement from "../../pages/admin/managementPanel/volunteerManagement";
import AnimalsStatistics from "../../pages/admin/statisticsPanel/animalsStatistics";
import { navigateTo } from "../functions/navigators";
import { checkIfUserIsLoggedIn } from "../services/check";

const AdminRoutes = () => {
  const location = useLocation();
  const storageState = sessionStorage.getItem("isLogged");
  const [isLogged, setIsLogged] = useState<boolean>(
    storageState ? true : false
  );
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const res = await checkIfUserIsLoggedIn();
        setIsLogged(res);
        sessionStorage.setItem("isLogged", "true");
        if (!res) {
          navigateTo(navigate, "/admin");
          sessionStorage.removeItem("isLogged");
        }
      } catch (error) {
        console.error("Error checking login status:", error);
      }
    };

    checkLoginStatus();
  }, [location, navigate]);

  if (isLogged === null) {
    return <>Loading..</>;
  }

  return (
    <>
      {isLogged ? (
        <>
          <Box
            sx={{
              width: "100%",
              minHeight: "800px",
              height: { xs: "100%", md: "100vh" },
              display: "flex",
            }}
          >
            <AdminMenu />
            <Box
              sx={{
                minWidth: { xs: "100%", md: "600px" },
                height: "100%",
                width: { xs: "100%", lg: '"calc(100% - 200px)"' },
                marginLeft: { xs: "0", lg: "200px" },
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "column",
                paddingX: "1rem",
                marginTop: { xs: "70px", lg: "0" },
              }}
            >
              <Routes location={location} key={location.pathname}>
                <Route path="/panel" element={<Panel />} />
                <Route path="/management" element={<ManagmentPanel />} />
                <Route
                  path="/management/animals"
                  element={<PetsManagement />}
                />
                <Route
                  path="/management/animals/:petId"
                  element={<PetManagement />}
                />
                <Route
                  path="/management/animals/diseases/:petId"
                  element={<PetDiseaseDetails />}
                />
                <Route
                  path="/management/diseases"
                  element={<DiseaseManagement />}
                />
                <Route
                  path="/management/diseases/:diseaseId"
                  element={<DiseaseDetails />}
                />
                <Route
                  path="/management/isolations"
                  element={<IsolationManagement />}
                />
                <Route
                  path="/management/isolation/:isolationId"
                  element={<IsolationDetails />}
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
                  path="/management/adoptions/:adoptionId"
                  element={<AdoptionDetails />}
                />

                <Route
                  path="/management/resources"
                  element={<ResourcesManagement />}
                />
                <Route
                  path="/management/resources/:id"
                  element={<ResourceDetails />}
                />
                <Route
                  path="/management/guests"
                  element={<GuestManagement />}
                />
                <Route
                  path="/management/personDetails/:type/:id"
                  element={<PersonDetails />}
                />
                <Route
                  path="/management/meetings"
                  element={<MeetingManagement />}
                />
                <Route
                  path="/management/meetings/:id"
                  element={<MeetingDetails />}
                />
                <Route
                  path="/statistics/animals"
                  element={<AnimalsStatistics />}
                />
              </Routes>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Routes location={location} key={location.pathname}>
            <Route path="/*" element={<LoginPage />} />{" "}
          </Routes>
        </>
      )}
    </>
  );
};

export default AdminRoutes;
