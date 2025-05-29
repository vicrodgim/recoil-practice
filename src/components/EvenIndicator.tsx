import { isEvenState } from "../state/isEvenSelector";
import { useRecoilValue } from "recoil";

export default function EvenIndicator() {
  const isEven = useRecoilValue(isEvenState);

  return (
    <div>
      <p>{isEven ? "Even ✅ " : "Odd 🔢"}</p>
    </div>
  );
}
