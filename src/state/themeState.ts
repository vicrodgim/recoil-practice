import { atom } from "recoil";

export const themeState = atom<"light" | "dark">({
  key: "themeState",
  default: "light",
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") {
        setSelf(saved);
      }
      onSet((newTheme) => {
        localStorage.setItem("theme", newTheme);
      });
    },
  ],
});
