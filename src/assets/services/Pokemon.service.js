import axios from "axios";

const axiosService = axios.create();


export const PokemonService = {
  getPokemons: async (url) => {
    return await axiosService.get(url || `https://pokeapi.co/api/v2/pokemon?offset=0&limit=12`);
  },
  getPokemonInfo: async (url) => {
    return await axiosService.get(url);
  },
  getPokemonTypes: async () => {
    return await axiosService.get(`https://pokeapi.co/api/v2/type`);
  },
  getPokemonPhoto: async (query) => {
    return await axiosService.get(`https://api.unsplash.com/search/photos/?client_id=xlJFDAt810diQgLfPjIepdt4CBO2Lujx-NgMjZqgR9s&query=${query}-pokemon`);
  },
};
