import { createTheme, CssBaseline, Stack, ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AppHeader from '../components/AppHeader';
import Login from '../components/Login';
import Profile from '../components/Profile';
import Register from '../components/Register';
import Scores from '../components/Scores/Scores';
import Test from '../components/Test';


const Main: React.FC<{view: string}> = (props) => {

  const user = localStorage.getItem('user') || '';

  const mode: number = localStorage.getItem('theme') == 'dark' ? 1 : 0;

  const [theme, setTheme] = useState<number>(mode)

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  return (
    <>
    <ThemeProvider theme={theme == 1 ? darkTheme : lightTheme}>

      <CssBaseline />
      <AppHeader/>

      <Stack alignItems={'center'} sx={{ mt: 20 }} >
      
        {props.view == '' &&
            <Test theme={theme} setTheme={setTheme} ></Test>
        }

        {props.view == 'scores' && 
            <Scores></Scores>
        }

        {props.view == 'profile' && user !== '' && 
            <Profile></Profile>
        }

        {props.view == 'settings' && 
            <h1>SETTINGS</h1>
        }
        
        {props.view == 'keyboards' && 
            <h1>Keyboards</h1>
        }

        {props.view == 'login' && user == '' &&
            <Login></Login>
        }

        {props.view == 'register' && user == '' && 
            <Register></Register>
        }

      </Stack>
    </ThemeProvider>
    </>
  );
}

export default Main;