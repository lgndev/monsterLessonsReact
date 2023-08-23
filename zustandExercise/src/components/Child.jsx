import { usePokemon } from "../store/usePokemon";
import { useState } from "react";

const Child = () => {
  const isLoading = usePokemon((state) => state.isLoading);
  const error = usePokemon((state) => state.error);
  const data = usePokemon((state) => state.data);
  const getPokemon = usePokemon((state) => state.getPokemon);
  const offset = usePokemon((state) => state.offset);

  return (
    <div>
      <p>DEEPLY NESTED CHILD</p>
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
    </div>
  );
};

export default Child;
