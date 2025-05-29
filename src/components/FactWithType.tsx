import { useState } from "react";
import { useRecoilValueLoadable } from "recoil";
import { numberFactWithType } from "../state/numberFactWithType";

export default function FactWithType() {
  const [number, setNumber] = useState(12);
  const [type, setType] = useState<"trivia" | "math" | "year">("trivia");

  const factLoadable = useRecoilValueLoadable(
    numberFactWithType({ number, type })
  );

  return (
    <div>
      <h2>Fact By Type</h2>
      <input
        placeholder="Enter a number"
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value as "trivia" | "math" | "year")}
      >
        <option value="trivia">Trivia</option>
        <option value="math">Math</option>
        <option value="year">Year</option>
      </select>
      <div>
        {factLoadable.state === "loading" && <p>Loading...</p>}
        {factLoadable.state === "hasError" && <p>Error</p>}
        {factLoadable.state === "hasValue" ? (
          <p>{factLoadable.contents as string}</p>
        ) : null}
      </div>
    </div>
  );
}
