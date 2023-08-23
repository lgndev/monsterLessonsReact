import { create } from "zustand";

export const usePokemon = create((set, get) => ({
  isLoading: false,
  error: null,
  data: [],
  offset: 0,
  toggleLoading: () => set((state) => ({ isLoading: !state.isLoading })),
  setError: (error) => set(() => ({ error })),
  setData: (data) => set((state) => ({ data: [...state.data, ...data] })),
  incrementOffset: () => set((state) => ({ offset: state.offset + 10 })),
  getPokemon: async (offset) => {
    const toggleLoading = get().toggleLoading;
    const setError = get().setError;
    const setData = get().setData;
    const incrementOffset = get().incrementOffset;
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=10`;

    toggleLoading();
    try {
      const res = await fetch(url);
      const json = await res.json();
      toggleLoading();
      setData(json.results);
      incrementOffset();
    } catch (err) {
      toggleLoading();
      setError(err.message);
    }
  },
}));
