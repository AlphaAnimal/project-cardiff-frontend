import { Stack, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/userServices';


const Profile = () => {

    // Logged in as +name
    // Account creation date
    // Number of games (per type)

  const user = localStorage.getItem('user');

  const navigate = useNavigate();

  const onLogout = () => {
      const res = logout()
      navigate('/login')
  }

  return (
    <Stack>
      <Button onClick={(e)=>onLogout()} variant="contained" >Logout</Button>
    </Stack>
  )
}

export default Profile