import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';

import style from './NavBar.module.scss';



const pages = [
  'Home', 'Sobre', 'Planos', 'Contato'
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#09090a', color: '#e8c466' }}>
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
              sx={{ my: 2, color: '#e8c466', display: 'block' }}
            >
              Home
            </Button>
            <Button
              key="Sobre"
              href="/about"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#e8c466', display: 'block' }}
            >
              Sobre
            </Button>
            <Button
              key="Planos"
              href="/prices"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#e8c466', display: 'block' }}
            >
              Planos
            </Button>
            <Button
              key="Contato"
              href="/contact"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#e8c466', display: 'block' }}
            >
              Contato
            </Button>
          </Box>

          <Box sx={{ width: 220, display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" className={style.register}>Cadastre-se</Button>
            <Button variant="outlined">Login</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
