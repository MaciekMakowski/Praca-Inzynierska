import { useState } from 'react'
import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import {Box, createTheme, ThemeProvider} from "@mui/material";
import {themeOptions} from "./assets/theme";
function App() {
    const theme = createTheme(themeOptions)

  return (
      <>
          <ThemeProvider theme={theme}>
              <Navbar/>
              <Box
                  mt={'5rem'}
              >

              </Box>
              <Home/>
              <Footer/>
          </ThemeProvider>
      </>
  )
}

export default App
