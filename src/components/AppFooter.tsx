import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Stack, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import React from 'react';
import { useNavigate } from 'react-router-dom';


const AppFooter: React.FC<{}> = () => {

  const navigate = useNavigate();

  const routes = ['Home', 'Scores', 'About'];
  const settings = ['Profile', 'Settings', 'Logout'];

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
    <AppBar position="static" sx={{position: 'fixed', bottom: 0, left: 0, width: '100%'}}>
      <Container maxWidth="xl">
        <Toolbar>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppFooter;