import { useRecoilValueLoadable } from "recoil";
import { mathFactState } from "../state/mathFactSelector";

export default function MathFact() {
  const loadableMathFact = useRecoilValueLoadable(mathFactState);

  return (
    <div>
      {loadableMathFact.state === "loading" && <p>Loading math fact...</p>}
      {loadableMathFact.state === "hasError" && (
        <p>Error ❌ : {String(loadableMathFact.contents)}</p>
      )}
      {loadableMathFact.state === "hasValue" && (
        <p>
          <strong>Math fact:</strong> {loadableMathFact.contents}
        </p>
      )}
    </div>
  );
}
