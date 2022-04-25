import { Stack } from '@mui/material';
import React from 'react';
import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';
import Test from '../components/Test';


const Main: React.FC<{view: string, logged?: boolean}> = (props) => {

  // IF COMING FROM LOGOUT, LOG THE USER OUT HERE

  return (
    <>
    <AppHeader></AppHeader>
    
    {/* CONDITIONS BASED ON VIEW */}

    {props.view == '' && 
      <Stack>
        <Test></Test>
      </Stack>
    }

    {props.view == 'scores' && 
      <Stack>
        <h1>SCORES</h1>
      </Stack>
    }

    {props.view == 'profile' && 
      <Stack>
        <h1>PROFILE</h1>
      </Stack>
    }

    {props.view == 'settings' && 
      <Stack>
        <h1>SETTINGS</h1>
      </Stack>
    }
    
    {props.view == 'about' && 
      <Stack>
        <h1>ABOUT</h1>
      </Stack>
    }

    {props.view == 'login' && 
      <Stack>
        <h1>LOGIN</h1>
      </Stack>
    }

    {props.view == 'register' && 
      <Stack>
        <h1>REGISTER</h1>
      </Stack>
    }

    <AppFooter></AppFooter>

    </>
  );
}

export default Main;