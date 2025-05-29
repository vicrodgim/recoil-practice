import { selector } from "recoil";
import { counterState } from "./counterAtom";

export const tripleCountState = selector({
  key: "tripleCountState",
  get: ({ get }) => {
    const count = get(counterState);
    return count * 3;
  },
});
