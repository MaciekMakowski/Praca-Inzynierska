import { useState } from 'react'
import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import {Box, createTheme, ThemeProvider} from "@mui/material";
import {themeOptions} from "./assets/theme";
import { BrowserRouter as Router } from 'react-router-dom';
import {Route, Routes, useLocation} from "react-router-dom";
import OurNeeds from "./components/ourNeeds";
import Contact from "./components/contact";
import Adoption from "./components/adoption";
function App() {
    const theme = createTheme(themeOptions)

  return (
      <>
          <ThemeProvider theme={theme}>
              <Router>
                  <Navbar/>
                  <Box
                      mt={'5rem'}
                  >
              <Routes location={location} key={location.pathname}>
                  <Route path={'/'} element={<Home/>}/>
                  <Route path={'/needs'} element={<OurNeeds/>}/>
                  <Route path={'/contact'} element={<Contact/>}/>
                  <Route path={'/adoption'} element={<Adoption/>}/>
                  <Route path={'/*'} element={<Home/>}/>
              </Routes>
                  </Box>
                  <Footer/>
              </Router>
          </ThemeProvider>
      </>
  )
}

export default App
