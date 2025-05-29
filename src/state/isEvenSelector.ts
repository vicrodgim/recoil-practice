import { counterState } from "./counterAtom";
import { selector } from "recoil";

export const isEvenState = selector({
  key: "isEvenState",
  get: ({ get }) => {
    const count = get(counterState);
    return count % 2 === 0;
  },
});
