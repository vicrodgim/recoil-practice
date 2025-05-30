import { atom } from "recoil";
import { selector } from "recoil";

export const formSubmittedState = atom<boolean>({
  key: "formSubmittedState",
  default: false,
});

export const submissionTimeState = atom<string>({
  key: "submissionTimeState",
  default: "",
});

export const submitFormSelector = selector<boolean>({
  key: "submitFormSelector",
  get: ({ get }) => get(formSubmittedState),
  set: ({ set }, newValue) => {
    if (newValue === true) {
      set(formSubmittedState, true);
      const now = new Date();
      set(submissionTimeState, now.toLocaleString());
    }
  },
});
