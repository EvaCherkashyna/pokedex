import React, { useEffect, useState } from 'react'
import { PokemonCardList, PokemonInfoCard } from "../components";
import Wrapper from '../assets/wrappers/Main';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../store/slices/Pokemons.slice';
import { getTypes } from '../store/slices/PokemonTypes.silce';

const Main = () => {
  const [showInfo, setShowInfo] = useState()
  const [info, setInfo] = useState()
  const pending = useSelector(state => state.pokemons.pending)
  
  const dispatch = useDispatch()

  const handleLoad = () => {
    dispatch(getPokemons())
    setShowInfo(false)
  }
  
  useEffect(() => {
    dispatch(getPokemons())
    dispatch(getTypes())
  }, [])
  return (
    <Wrapper >
      {pending ? <p>Loading...</p>
        : <div className="list-container">
          <PokemonCardList showInfo={showInfo} setShowInfo={setShowInfo} setInfo={setInfo} />
          {showInfo &&
          <PokemonInfoCard pokemonInfo={info} setShowInfo={setShowInfo} />}
        </div>
      }

      <button onClick={handleLoad} className='load-btn'>Load more</button>
      <></>
    </Wrapper>
  )
}

export default Main
