import axios from "axios";
import { selector } from "recoil";
import { baseUrl } from "../../utils/constants";

export interface IWord {
  _id: string;
  text: string;
  mistakes: number;
}

export const wordsSelector = selector({
  key: "wordsSelector",
  get: async ({ get }) => {
    try {
      const response = await axios.get(baseUrl + "/api/words/");
      return response.data as IWord[];
    } catch (error) {
      console.error(error);
      return [];
    }
  },
});
