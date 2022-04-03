import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./layouts/Layout";
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import LoginModal from "./Pages/LoginModal";
import AuthRequire from "./contexts/AuthRequire";
import JobModal from "./Pages/JobModal";

function App() {
  const location = useLocation();
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AuthProvider>
        <Routes location={location.state?.backgroundLocation || location}>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<HomePage />} />
            <Route path="/jobs/:id" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        <Routes>
          <Route>
            <Route path="/login" element={<LoginModal />} />
            <Route
              path="/jobs/:id"
              element={
                <AuthRequire>
                  <JobModal />
                </AuthRequire>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
