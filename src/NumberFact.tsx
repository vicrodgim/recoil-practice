import { useRecoilValueLoadable } from "recoil";
import { numberFactState } from "./state/numberFactSelector";

export default function NumberFact() {
  const factLoadable = useRecoilValueLoadable(numberFactState);

  return (
    <div>
      {factLoadable.state === "loading" && <p>Loading trivia...</p>}
      {factLoadable.state === "hasError" && (
        <p>Error: {String(factLoadable.contents)} </p>
      )}
      {factLoadable.state === "hasValue" && (
        <p>Trivia fact: {factLoadable.contents}</p>
      )}
    </div>
  );
}
