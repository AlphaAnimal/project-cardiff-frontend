import axios from "axios";
import { baseUrl } from "../utils/constants";

export const createScore = async (scoreData: any) => {
  const response = await axios.post(baseUrl + "/api/scores/", scoreData);

  return response.data;
};

export const getScores = async () => {
  const response = await axios.get(baseUrl + "/api/scores/");

  return response.data;
};
