import React from "react";
import { counterState } from "./state/counterAtom";
import { useRecoilState } from "recoil";

export default function Counter() {
  const [count, setCount] = useRecoilState(counterState);

  return (
    <div>
      <h2>Counter</h2>
      <p>Count:{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </div>
  );
}
