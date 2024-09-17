import axios from "axios";

export const createScore = async (scoreData: any) => {
  const response = await axios.post(
    "http://localhost:5000/api/scores/",
    scoreData
  );

  return response.data;
};

export const getScores = async () => {
  const response = await axios.get("http://localhost:5000/api/scores/");

  return response.data;
};
