import { create } from "zustand";

export const usePokemon = create((set, get) => ({
  isLoading: false,
  error: null,
  data: [],
  offset: 0,
  toggleLoading: () => set((state) => ({ isLoading: !state.isLoading })),
  setError: (error) => set((state) => ({ error })),
  getPokemon: async (offset) => {
    const toggleLoading = get().toggleLoading;
    const setError = get().setError;
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=10`;

    toggleLoading();
    try {
      const res = await fetch(url);
      const json = await res.json();
      toggleLoading();

      return set((state) => ({
        offset: state.offset + 10,
        data: [...state.data, ...json.results],
      }));
    } catch (err) {
      toggleLoading();
      setError(err.message);
    }
  },
}));
