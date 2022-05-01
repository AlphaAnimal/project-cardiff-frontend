import { Stack, Button, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getScores } from '../services/scoreServices';
import { logout } from '../services/userServices';


const Profile: React.FC<{}> = () => {

    // Preferred keyboard type
    // Preferred theme
    // Personal scores

  const [scores, setScores] = useState()

  useEffect(() => {
    try {
      const res = getScores();
      res.then((result) => {
        setScores(result)
      })
    }
    catch (error){
      console.log(error)
    }
  },[]);

  useEffect(() => {
    console.log('scores: ', scores)
  },[scores]);

  const user = JSON.parse(localStorage.getItem('user') || '');

  console.log('user: ', user)

  const navigate = useNavigate();

  const onLogout = () => {
      const res = logout()
      navigate('/login')
  }

  return (
    <Stack direction={'column'} spacing={2}>
      <Typography variant={'h6'}>Logged in as: {user.name}</Typography>
      <Typography variant={'h6'}>Email: {user.email}</Typography>
      <Stack>
      <Button style={{width: '120px'}} onClick={(e)=>onLogout()} variant="contained" >Logout</Button>
      </Stack>
    </Stack>
  )
}

export default Profile