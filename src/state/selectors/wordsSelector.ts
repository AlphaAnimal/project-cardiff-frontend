import axios from "axios";
import { selector } from "recoil";

export interface IWord {
  _id: string;
  text: string;
  mistakes: number;
}

export const wordsSelector = selector({
  key: "wordsSelector",
  get: async ({ get }) => {
    try {
      const response = await axios.get("http://localhost:5000/api/words/");
      return response.data as IWord[];
    } catch (error) {
      throw error;
    }
  },
});
