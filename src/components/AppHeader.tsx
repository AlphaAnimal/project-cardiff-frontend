import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Stack, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaKeyboard } from 'react-icons/fa';

const AppHeader: React.FC<{user: string}> = (props) => {

  const navigate = useNavigate();

  const routes = props.user !== '' ? ['Home', 'Scores', 'About', 'Profile'] : ['Home', 'Scores', 'About', 'Login', 'Register'];

  return (
    <AppBar position="static" style={{ width: '100%'}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {routes.map((route) => (
              <Button
                key={route}
                onClick={() => {  navigate('/'+route);}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {route}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};


export default AppHeader;