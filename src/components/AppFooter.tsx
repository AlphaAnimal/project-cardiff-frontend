import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Stack, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import React from 'react';
import { useNavigate } from 'react-router-dom';


const AppFooter: React.FC<{}> = () => {

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