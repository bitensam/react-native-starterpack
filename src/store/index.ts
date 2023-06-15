import { StateCreator, create } from 'zustand';

interface Pokemon {
  name: string;
  id: string;
}

interface CounterSlice {
  number: number;
  increaseCounterNumber: () => void;
  decreaseCounterNumber: (num: number) => void;
  logNumber: () => void;
}

interface PokemonSlice {
  pokemon: Pokemon[];
  fetchPokemon: () => Promise<void>;
}

type GlobalState = CounterSlice & PokemonSlice;

const createCounterSlice: StateCreator<GlobalState, [], [], CounterSlice> = (set, get) => ({
  number: 123,
  increaseCounterNumber: () => set(state => ({ number: state.number + 1 })),
  decreaseCounterNumber: (num: number) => set(state => ({ number: state.number - num })),
  logNumber: () => {
    console.log(` Current number value equals ${get().number}`);
  },
});

const createPokemonSlice: StateCreator<GlobalState, [], [], PokemonSlice> = set => ({
  pokemon: [],
  fetchPokemon: async () => {
    await fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response => response.json())
      .then(data => set({ pokemon: data.results }));
  },
});

export const useCombinedStore = create<GlobalState>()((...params) => ({
  ...createPokemonSlice(...params),
  ...createCounterSlice(...params),
}));
