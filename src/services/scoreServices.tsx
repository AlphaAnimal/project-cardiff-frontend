import axios from 'axios';


export const createScore = async (scoreData: any, token: any) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    const response = await axios.post('http://localhost:5000/api/scores/', scoreData, config)
  
    return response.data
}

export const getPersonalScores = async (token: any) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    
    const response = await axios.get('http://localhost:5000/api/scores/', config)
  
    return response.data
}  