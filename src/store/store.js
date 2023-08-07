import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import PokemonsSlice from './slices/Pokemons.slice';
import PokemonTypesSilce from './slices/PokemonTypes.silce';

import rootSaga from './sagas/Root.saga';

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    pokemons: PokemonsSlice,
    pokemonType:PokemonTypesSilce
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);