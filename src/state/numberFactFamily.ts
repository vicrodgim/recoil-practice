import { selectorFamily } from "recoil";
import axios from "axios";

export const numberFactFamily = selectorFamily<string, number>({
  key: "numberFactFamily",
  get: (num) => async () => {
    try {
      const res = await axios.get(`http://numbersapi.com/${num}`);
      return res.data;
    } catch (error) {
      throw new Error(`Failed to load fact for ${num}`);
    }
  },
});
