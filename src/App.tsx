import Counter from "./Counter";
import ThemeToggle from "./ThemeToggle";
import TripleDisplay from "./TripleDisplay";
import EvenIndicator from "./EvenIndicator";
import NumberFact from "./NumberFact";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Recoil Mini Practice</h1>
      <Counter />
      <ThemeToggle />
      <TripleDisplay />
      <EvenIndicator />
      <NumberFact />
    </div>
  );
}

export default App;
