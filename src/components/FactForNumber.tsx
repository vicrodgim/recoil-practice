import { useRecoilValueLoadable } from "recoil";
import { numberFactFamily } from "../state/numberFactFamily";

export default function FactForNumber({ number }: { number: number }) {
  const factLoadable = useRecoilValueLoadable(numberFactFamily(number));

  return (
    <div>
      {factLoadable.state === "loading" && <p>{number} ➜ Loading...</p>}
      {factLoadable.state === "hasError" && <p>{number} ➜ Error</p>}
      {factLoadable.state === "hasValue" && (
        <p>
          {number} ➜ {factLoadable.contents}
        </p>
      )}
    </div>
  );
}
