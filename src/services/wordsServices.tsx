import axios from "axios";

export const getWords = async () => {
  const response = await axios.get("http://localhost:5000/api/words/");

  return response.data;
};

export const updateWord = async (
  wordId: string,
  wordData: { text: string; mistakes: number }
) => {
  const response = await axios.put(
    "http://localhost:5000/api/words/" + wordId,
    wordData
  );

  return response.data;
};
