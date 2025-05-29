import FactForNumber from "./FactForNumber";

const numbers = [3, 9, 6, 29, 12, 55];

export default function FactList() {
  return (
    <div>
      <h3>Number Facts</h3>
      {numbers.map((num) => (
        <FactForNumber key={num} number={num} />
      ))}
    </div>
  );
}
