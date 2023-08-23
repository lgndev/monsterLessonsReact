import { useState, useReducer } from "react";

// - use useReducer to manage our initial state
// - on button click, get pokemon in increments of 10
// -- https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    case "SET_DATA":
      return {
        ...state,
        data: [...state.data, ...action.payload],
      };
    default:
      return state;
  }
};

const App = () => {
  const [range, setRange] = useState(10);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isLoading, error, data } = state;

  const getPokemon = async (range) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${
      range - 10
    }&limit=10`;
    try {
      dispatch({ type: "SET_LOADING" });
      dispatch({ type: "SET_ERROR", payload: null });
      const res = await fetch(url);
      const json = await res.json();
      dispatch({ type: "SET_LOADING" });
      dispatch({ type: "SET_DATA", payload: json.results });
    } catch (error) {
      dispatch({ type: "SET_LOADING" });
      dispatch({ type: "SET_ERROR", payload: error.message });
    }
  };

  return (
    <>
      <button
        onClick={() => {
          setRange((prev) => prev + 10);
          getPokemon(range);
        }}
      >
        Get next 10 pokemon
      </button>
      <p>{isLoading ? "LOADING" : "NOT LOADING"}</p>
      <p>{error ? error : "NO ERROR"}</p>
      <ul>
        {data.map((pokemon) => {
          return <li key={pokemon.name}>{pokemon.name}</li>;
        })}
      </ul>
    </>
  );
};

export default App;
