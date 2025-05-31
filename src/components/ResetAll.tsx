import { useResetRecoilState } from "recoil";
import { counterState } from "../state/counterAtom";
import { themeState } from "../state/themeState";
import { useState } from "react";

export default function ResetAll() {
  const resetCounter = useResetRecoilState(counterState);
  const resetTheme = useResetRecoilState(themeState);
  const [message, setMessage] = useState("");

  const handleReset = () => {
    resetCounter();
    resetTheme();
    setMessage("✅ App state reset!");
    setTimeout(() => setMessage(""), 600);
  };

  return (
    <div style={{ marginTop: "1rem", display: "flex" }}>
      <button onClick={() => handleReset()}>Reset App 🔄 </button>
      {message && <p>{message}</p>}
    </div>
  );
}
