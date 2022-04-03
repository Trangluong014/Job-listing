import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import useSearch from "../hooks/useSearch";
import useAuth from "../hooks/useAuth";
import { Link, useLocation } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const location = useLocation();
  const searchInput = useSearch().keyword;
  const setSearchInput = useSearch().change;
  const isLogin = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            width: "100%",
            maxWidth: 1200,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box display="flex" flexGrow={1} alignItems="center">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Job Routing
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </Search>
            </Box>

            <Box display="inline-flex" alignItems="center">
              <Typography
                variant="body2"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                {isLogin.isAuthenticated === false
                  ? ""
                  : `${isLogin.user.username}`}
              </Typography>
              <IconButton
                size="large"
                color="inherit"
                onClick={() => {
                  return isLogin.isAuthenticated === false
                    ? null
                    : isLogin.logout();
                }}
              >
                {isLogin.isAuthenticated === false ? (
                  <Link to={`/login`} state={{ backgroundLocation: location }}>
                    <LoginIcon />{" "}
                  </Link>
                ) : (
                  <LogoutIcon />
                )}
              </IconButton>
              <Typography
                variant="body2"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                {isLogin.isAuthenticated === false ? "Sign In" : `Sign Out`}
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
