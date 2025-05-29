import { useRecoilValue } from "recoil";
import { tripleCountState } from "../state/tripleCountSelector";

export default function TripleDisplay() {
  const triple = useRecoilValue(tripleCountState);

  return (
    <div>
      <p>Triple Count: {triple}</p>
    </div>
  );
}
