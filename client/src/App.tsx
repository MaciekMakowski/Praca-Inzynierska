import {Route, Routes, useLocation} from "react-router-dom";
import {ThemeProvider, createTheme} from "@mui/material";

import AdminRoutes from "./utils/routes/adminRoutes";
import LoginRoutes from "./utils/routes/loginRoutes";
import { BrowserRouter as Router } from 'react-router-dom';
import UserRoutes from "./utils/routes/userRoutes";
import {themeOptions} from "./assets/theme";

function App() {
    const theme = createTheme(themeOptions)
  return (
      <>
          <ThemeProvider theme={theme}>
              <Router>
                <Routes>
                    <Route path="/*" element={<UserRoutes />} />
                    <Route path="/admin" element={<LoginRoutes />} />
                    <Route path="/admin/*" element={<AdminRoutes />} />
                </Routes>
              </Router>
          </ThemeProvider>
      </>
  )
}

export default App
