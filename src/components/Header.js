import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';

const pages = ['About', 'Contact'];

const customTheme = createTheme({
  palette: {
    secondary: {
      main: '#14213d',
      contrastText: '#white ',
    },
  },
});

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <AppBar position="static" style={{ width: '100vw' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                fontSize: { xs: '0.8rem', sm: '1.3em' },
              }}
            >
              GLOBALJOBSLIST
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link to={`/${page}`}>{page}</Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Link
                    style={{ textDecoration: 'none', color: 'white' }}
                    to={`/${page}`}
                  >
                    {page}
                  </Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;

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
