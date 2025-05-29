import { themeState } from "./state/themeState";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect } from "react";

export default function ThemeToggle() {
  const theme = useRecoilValue(themeState);
  const setTheme = useSetRecoilState(themeState);

  useEffect(() => {
    document.body.className = " ";
    document.body.classList.add(theme);
  }, [theme]);

  const toggleItems = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <h2>Theme</h2>
      <p>Current theme: {theme}</p>
      <button onClick={toggleItems}>Toggle</button>
    </div>
  );
}
