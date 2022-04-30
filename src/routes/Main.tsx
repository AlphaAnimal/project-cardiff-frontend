import { Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AppHeader from '../components/AppHeader';
import Login from '../components/Login';
import Profile from '../components/Profile';
import Register from '../components/Register';
import Scores from '../components/Scores';
import Test from '../components/Test';




const Main: React.FC<{view: string}> = (props) => {

  const user = localStorage.getItem('user') || '';

  return (
    <>
    <AppHeader></AppHeader>
    <Stack alignItems={'center'} sx={{ mt: 30 }} >
    
    {/* CONDITIONS BASED ON VIEW */}

    {props.view == '' &&
        <Test></Test>
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
    
    {props.view == 'about' && 
        <h1>ABOUT</h1>
    }

    {props.view == 'login' && user == '' &&
        <Login></Login>
    }

    {props.view == 'register' && user == '' && 
        <Register></Register>
    }

    </Stack>
    </>
  );
}

export default Main;