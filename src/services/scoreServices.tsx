import axios from "axios";

export const createScore = async (scoreData: any) => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.post(
    "http://localhost:5000/api/scores/",
    scoreData
  );

  return response.data;
};

export const getScores = async () => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }

  const response = await axios.get("http://localhost:5000/api/scores/");

  return response.data;
};
