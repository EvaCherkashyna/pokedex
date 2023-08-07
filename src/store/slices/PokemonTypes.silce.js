import { createSlice } from '@reduxjs/toolkit'

const initialState =
{
  colors: {
    normal: "#f4e752",
    fighting: "#9c6a6a",
    flying: "#8cacf6",
    poison: "#26c5c5",
    ground: "#735a29",
    rock: "#6f6f6f",
    bug: "#040403",
    ghost: "#336d79",
    steel: "#959ba1",
    fire: "#ff4105",
    water: "#1f62ac",
    grass: "#5b9c3a",
    electric: "#febd00",
    psychic: "#6a51a5",
    ice: "white",
    dragon: "darkgreen",
    dark: "#094152",
    fairy: "lightcoral",
    unknown: "#c2c2c2",
    shadow: "#494949"

  },
  types: [],
  pending: true
};

const pokemonTypesSlice = createSlice({
  name: 'pokemonType',
  initialState,
  reducers: {
    getTypes: () => { },
    setTypes: (state, { payload }) => {
      state.types.push(...payload);
      state.pending = false;
    },
    setPending: (state) => {
      state.pending = true;
    }
  }
});
export const {
  setTypes, getTypes,setPending
} = pokemonTypesSlice.actions;

export default pokemonTypesSlice.reducer;
