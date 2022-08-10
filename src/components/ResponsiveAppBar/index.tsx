import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import MenuIcon from '@mui/icons-material/Menu';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
 
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{backgroundColor: 'transparent', color: '#000', boxShadow: 'none'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DeviceHubIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Roboto',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SOLLUTE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
              <MenuItem key="Home" onClick={handleCloseNavMenu} >
                <Typography onClick={() => window.location.href = "/"} textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem key="Sobre" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Sobre</Typography>
              </MenuItem>
              <MenuItem key="Planos" onClick={handleCloseNavMenu}>
                <Typography onClick={() => window.location.href = "/prices"} textAlign="center">Planos</Typography>
              </MenuItem>
              <MenuItem key="Contato" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Contato</Typography>
              </MenuItem>
              <MenuItem key="Login" onClick={handleCloseNavMenu}>
                <Typography onClick={() => window.location.href = "/login"} textAlign="center">Login</Typography>
              </MenuItem><MenuItem key="Cadastre-se" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Cadastre-se</Typography>
              </MenuItem>         
            </Menu>
          </Box>
          <DeviceHubIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Roboto',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SOLLUTE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              key="Home"
              href="/"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#000', display: 'block' }}
            >
              Home
            </Button>
            <Button
              key="Sobre"
              href="/about"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#000', display: 'block' }}
            >
              Sobre
            </Button>
            <Button
              key="Planos"
              href="/prices"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#000', display: 'block' }}
            >
              Planos
            </Button>
            <Button
              key="Contato"
              href="/contact"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#000', display: 'block' }}
            >
              Contato
            </Button>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, width: 220, justifyContent: 'space-between' }}>
            <Button variant="contained" >Cadastre-se</Button>
            <Button variant="outlined" href='/login'>Login</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
