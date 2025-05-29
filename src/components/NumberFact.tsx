import { useRecoilValueLoadable } from "recoil";
import { numberFactState } from "../state/numberFactSelector";

export default function NumberFact() {
  const factLoadable = useRecoilValueLoadable(numberFactState);

  console.log("💬 Loadable:", factLoadable); // log the whole object
  console.log("📦 State:", factLoadable.state); // 'loading', '

  return (
    <div>
      {factLoadable.state === "loading" && <p>Loading trivia...</p>}
      {factLoadable.state === "hasError" && (
        <p> Error: {String(factLoadable.contents)} </p>
      )}
      {factLoadable.state === "hasValue" && (
        <p>
          <strong>Trivia fact: </strong>
          {factLoadable.contents}
        </p>
      )}
    </div>
  );
}
