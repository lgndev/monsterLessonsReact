import Parent from "./components/Parent";
import Child from "./components/Child";

// - use useReducer to manage our initial state
// - on button click, get pokemon in increments of 10
// -- https://pokeapi.co/api/v2/pokemon/?offset=${}&limit=10

const App = () => {
  return (
    <>
      <Parent>
        <Child />
      </Parent>
    </>
  );
};

export default App;
