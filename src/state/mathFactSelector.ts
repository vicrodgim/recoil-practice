import { selector } from "recoil";
import { counterState } from "./counterAtom";
import axios from "axios";

export const mathFactState = selector({
  key: "mathFactState",
  get: async ({ get }) => {
    const count = get(counterState);
    try {
      const response = await axios.get(`http://numbersapi.com/${count}/math`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch math fact.");
    }
  },
});
