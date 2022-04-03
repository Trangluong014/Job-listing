import { Container } from "@mui/material";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import AuthRequire from "./contexts/AuthRequire";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import JobModal from "./pages/JobModal";
import LoginModal from "./pages/LoginModal";
import NotFoundPage from "./pages/NotFoundPage";

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
