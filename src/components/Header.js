import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { signOut, Auth } from "firebase/auth";
import { auth } from "../firebase-config";
// import { AuthContext } from "../Context/AuthContext";
import { useContext, useState } from "react";
import { UserAuth } from "../Context/AuthContext";
import SideBarButton from "./Sidebar";

const pages = ["About", "Contact"];

const customTheme = createTheme({
  palette: {
    secondary: {
      main: "#14213d",
      contrastText: "#white ",
    },
  },
});

const Header = () => {
  const { logout } = UserAuth();
  const { user } = UserAuth();
  const Navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      // Navigate("/login");|
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <ThemeProvider theme={customTheme}>
      <AppBar position="static" style={{ width: "100vw" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Button
              variant="h6"
              sx={{
                mr: 2,
                display: { xs: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: { xs: "1rem", sm: "1.3em" },
              }}
            >
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                GLOBALJOBSLIST
              </Link>
            </Button>
            {/* Only used 900px and lower */}
            <Box
              sx={{
                display: "block",
                width: "60%",
                justifyContent: "end",
                alignItems: "center",
                mr: "10px",
              }}
            >
              <SideBarButton />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "end",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/${page}`}
                  >
                    {page}
                  </Link>
                </Button>
              ))}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {user ? (
                  <Button sx={{ color: "white" }} onClick={handleLogout}>
                    Sign out
                  </Button>
                ) : (
                  <Button
                    sx={{ color: "white" }}
                    onClick={() => Navigate("/login")}
                  >
                    Log In
                  </Button>
                )}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default Header;

//  <nav className="navBar">
//     <h1 className="pageTitle">GlobalJobsList</h1>
//     <ul className={openMenu ? "mainNav expanded" : "mainNav"}>
//       <Link to="/" className="navItem" onClick={toggleMenu}>Home</Link>
//       <Link to="/about" className="navItem" onClick={toggleMenu}>About</Link>
//       <Link to="/contact" className="navItem" onClick={toggleMenu}>Contact</Link>
//     </ul>
//       <span className='hamburger'>
//         <a href='#' onClick={toggleMenu}><i className="fa fa-bars"></i></a>
//       </span>
//  </nav>
// const [openMenu, setOpenMenu] = useState(false)

// function toggleMenu(){
//   setOpenMenu(menuStatus => !menuStatus)
// }
