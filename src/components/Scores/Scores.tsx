import { Stack, Button, Divider, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getScores } from '../../services/scoreServices';
import BasicTable from './Table';


const Scores = () => {

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

  const navigate = useNavigate();

  return (
    <Stack textAlign={'center'} direction="column" spacing={3}>
      <Typography variant={'h3'}>Global Scores</Typography>
      <Typography variant={'h6'}>For personal scores check <span style={{cursor: 'pointer'}} onClick={()=>navigate('/profile')}>Profile</span></Typography>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Stack direction="column" textAlign={'center'} spacing={2}>
          <Typography variant={'h5'}>Light Theme</Typography>
          <BasicTable data={''}></BasicTable>
        </Stack>
        <Stack direction="column" textAlign={'center'} spacing={2}>
          <Typography variant={'h5'}>Dark Theme</Typography>
          <BasicTable data={''}></BasicTable>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Scores