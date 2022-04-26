import { Stack } from '@mui/material';
import React, { useState } from 'react';
import AppFooter from '../components/AppFooter';
import AppHeader from '../components/AppHeader';
import Login from '../components/Login';
import Register from '../components/Register';
import Test from '../components/Test';


const Main: React.FC<{view: string, logged?: boolean}> = (props) => {

  const [user, setUser] = useState<string>('');

  // IF COMING FROM LOGOUT, LOG THE USER OUT HERE

  return (
    <>
    <AppHeader user={user} ></AppHeader>
    
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

    {props.view == 'profile' && user !== '' && 
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

    {props.view == 'login' && user == '' && 
      <Stack>
        <Login></Login>
      </Stack>
    }

    {props.view == 'register' && user == '' && 
      <Stack>
        <Register></Register>
      </Stack>
    }

    <AppFooter></AppFooter>

    </>
  );
}

export default Main;