import { PokemonService } from "../../assets/services/Pokemon.service";
import {
  call,
  put,
  all,
  select,
  fork,
  takeLatest,
} from "redux-saga/effects";

import {  setPending, setPokemons } from "../slices/Pokemons.slice";
import { setTypes,setPending as setPendingTypes } from "../slices/PokemonTypes.silce";

function* workerPokemons() {
  try {
    yield put(setPending());
    const url = yield select(state => state.pokemons.next)
    const filtered = yield select(state => state.pokemons.filteredByTypes)
    const newFiltered = {};
    Object.assign(newFiltered, filtered);

    const { data: results } = yield call(PokemonService.getPokemons, url);
    let payload = {
      pokemons: [],
      next: "",
      previous: null,
      filteredByTypes: newFiltered
    }
    if (results) {
      payload = {
        ...payload,
        next: results.next,
        previous: results.previous,
      }
      for (let i = 0; i < results.results.length; i++) {
        const { data } = yield call(PokemonService.getPokemonInfo, results.results[i].url);
        data && payload.pokemons.push(data);
        data.types?.map((e) => {
          const name = e.type?.name.toString()
          if(!Object.isExtensible(payload.filteredByTypes)){
            Object.preventExtensions(payload.filteredByTypes);
          }
          if (payload.filteredByTypes[name]) {
            payload.filteredByTypes[name]=payload.filteredByTypes[name].concat([data])
          } else {
            payload.filteredByTypes[name] = []
            payload.filteredByTypes[name].push(data)
          }
        });

      }
    }
    yield put(setPokemons(payload));
    const selec = yield select(state => state.pokemons.pending)
    
  } catch (error) {
    console.log(error);
  }
}

export default function* watchPokemons() {
  yield all([takeLatest("pokemons/getPokemons", workerPokemons)]);
}

function* workerTypes() {
  try {
    yield put(setPendingTypes());
    const { data: results } = yield call(PokemonService.getPokemonTypes)
    yield put(setTypes(results.results))
  } catch (error) {
    console.log(error);
  }
}

export function* watchTypes() {
  yield all([takeLatest("pokemonType/getTypes", workerTypes)]);
}
export function* pokemonsSaga() {
  yield all([
    fork(watchPokemons),
    fork(watchTypes),
  ]);
}