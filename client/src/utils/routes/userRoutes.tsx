import { Route, Routes, useLocation } from "react-router-dom";

import Adoption from "../../pages/adoption";
import AdoptionAnimal from "../../pages/adoptionAnimal";
import AdoptionFormSended from "../../pages/adoptionFormSended";
import AnimalPage from "../../pages/animalPage";
import { Box } from "@mui/material";
import Contact from "../../pages/contact";
import Footer from "../../components/footer";
import Home from "../../pages/home";
import Navbar from "../../components/navbar";
import Needs from "../../pages/ourNeeds";
import OurAnimals from "../../pages/OurAnimals";

const UserRoutes = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Box mt={"5rem"}>
        <Routes location={location} key={location.pathname}>
          <Route path="/*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/needs" element={<Needs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/ourAnimals" element={<OurAnimals />} />
          <Route path="/ourAnimals/:id" element={<AnimalPage />} />
          <Route path="/ourAnimals/adoption/:id" element={<AdoptionAnimal />} />
          <Route path="/formSended/:name/:animal/:id" element={<AdoptionFormSended/>} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
};

export default UserRoutes;
