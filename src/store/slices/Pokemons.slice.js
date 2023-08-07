import { createSlice } from '@reduxjs/toolkit'

const initialState =
{
  pokemons: [],
  next: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=12",
  previous: null,
  pending: true,
  filteredByTypes: {},
  filter: "all"
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    getPokemons() {
    },
    setPokemons(state, { payload }) {
      state.pokemons.push(...payload.pokemons);
      state.previous = payload.previous;
      state.next = payload.next;
      state.pending = false;
      state.filteredByTypes = payload.filteredByTypes;
    },
    setFilter: (state, { payload }) => {
      state.filter = payload.toString();
    },
    setPending: (state) => {
      state.pending = true
    }
  }
});

export const {
  getPokemons, setPokemons, setFilter,setPending
} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
