import { useSetRecoilState } from "recoil";
import { counterState } from "../state/counterAtom";

export default function ResetCounter() {
  const setCount = useSetRecoilState(counterState);

  return (
    <div>
      <button onClick={() => setCount(0)}>Reset Counter🔄</button>
    </div>
  );
}
