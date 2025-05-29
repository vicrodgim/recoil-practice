import { selector } from "recoil";
import { counterState } from "./counterAtom";
import axios from "axios";

export const numberFactState = selector({
  key: "numberFactState",
  get: async ({ get }) => {
    const count = get(counterState);
    try {
      const response = await axios.get(`http://numbersapi.com/${count}/trivia`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch number fact");
    }
  },
});
