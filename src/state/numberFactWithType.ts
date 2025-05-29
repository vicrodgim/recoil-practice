import { selectorFamily } from "recoil";
import axios from "axios";

export const numberFactWithType = selectorFamily<
  string,
  { number: number; type: "trivia" | "math" | "year" }
>({
  key: "numberFactWithType",
  get:
    ({ number, type }) =>
    async () => {
      try {
        const res = await axios.get(`http://numbersapi.com/${number}/${type}`);
        return res.data;
      } catch (error) {
        throw new Error(`Failed to load ${type} fact for ${number}`);
      }
    },
});
