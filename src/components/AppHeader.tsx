import { AppBar, Box, Button, Toolbar } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppHeader: React.FC<{}> = () => {

  const navigate = useNavigate();

  const user = localStorage.getItem('user') || '';

  const routes = user !== '' ? ['Home', 'Scores', 'Keyboards', 'Profile'] : ['Home', 'Scores', 'Login', 'Register'];

  return (
    <AppBar position="static" >
        <Toolbar>
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
    </AppBar>
  );
};


export default AppHeader;