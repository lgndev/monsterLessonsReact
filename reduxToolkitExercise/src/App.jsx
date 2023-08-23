import { useDispatch, useSelector } from "react-redux";
import {
  toggleLoading,
  setError,
  setData,
  incrementOffset,
} from "./store/pokemon";

const App = () => {
  const isLoading = useSelector((state) => state.pokemon.isLoading);
  const error = useSelector((state) => state.pokemon.error);
  const data = useSelector((state) => state.pokemon.data);
  const offset = useSelector((state) => state.pokemon.offset);
  const dispatch = useDispatch();

  const getPokemon = async (offset) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=10`;

    dispatch(toggleLoading());
    try {
      const res = await fetch(url);
      const json = await res.json();
      dispatch(toggleLoading());
      dispatch(setData(json.results));
      dispatch(incrementOffset());
    } catch (err) {
      dispatch(toggleLoading());
      dispatch(setError(err.message));
    }
  };

  console.log("app: ", isLoading, error, data, offset);
  return (
    <>
      <button
        onClick={() => {
          getPokemon(offset);
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
