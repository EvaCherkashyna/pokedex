import { all } from "redux-saga/effects";
import { pokemonsSaga } from "./Pokemon.saga";
export default function* rootSaga() {
  yield all([
    pokemonsSaga()
  ]);
}
