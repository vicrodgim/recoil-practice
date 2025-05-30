import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";
import TripleDisplay from "./components/TripleDisplay";
import EvenIndicator from "./components/EvenIndicator";
import NumberFact from "./components/NumberFact";
import ResetCounter from "./components/ResetCounter";
import MathFact from "./components/MathFact";
import FactList from "./components/FactList";
import FactWithType from "./components/FactWithType";
import SubmitForm from "./components/SubmitForm";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Recoil Mini Practice</h1>
      <Counter />
      <ThemeToggle />
      <TripleDisplay />
      <EvenIndicator />
      <ResetCounter />
      <NumberFact />
      <MathFact />
      <FactList />
      <FactWithType />
      <SubmitForm />
    </div>
  );
}

export default App;
