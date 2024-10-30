import axios from "axios";
import { baseUrl } from "../utils/constants";

export const getWords = async () => {
  const response = await axios.get(baseUrl + "/api/words/");

  return response.data;
};

export const updateWord = async (
  wordId: string,
  wordData: { text: string; mistakes: number }
) => {
  const response = await axios.put(baseUrl + "/api/words/" + wordId, wordData);

  return response.data;
};
