import { Stack, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { getPersonalScores } from '../services/scoreServices';


const Scores = () => {

  const user = JSON.parse(localStorage.getItem('user') || '');

  const [scores, setScores] = useState()

  useEffect(() => {
    try {
      const res = getPersonalScores(user.token);
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



  return (
    <Stack>
      
    </Stack>
  )
}

export default Scores