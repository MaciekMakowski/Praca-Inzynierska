import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import Needs from "../../pages/ourNeeds";
import Contact from "../../pages/contact";
import Adoption from "../../pages/adoption";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { Box } from "@mui/material";
const UserRoutes = () => {
  return (
    <>
      <Navbar />
      <Box mt={"5rem"}>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/needs" element={<Needs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/adoption" element={<Adoption />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
};

export default UserRoutes;
