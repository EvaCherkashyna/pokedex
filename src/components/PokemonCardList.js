import React from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './PokemonCard'
import Wrapper from '../assets/wrappers/PokemonCardList'

const PokemonCardList = ({setShowInfo,setInfo,showInfo}) => {
  const pokemons = useSelector(state => state.pokemons)

  return (
    <Wrapper showInfo={showInfo}>
      {pokemons.filter == "all"
        ? pokemons.pokemons.map((e) =>
         <PokemonCard showInfo={showInfo} setShowInfo={setShowInfo} setInfo={setInfo} pokemon={e} />)
        : pokemons.filteredByTypes[pokemons.filter] 
        ? pokemons.filteredByTypes[pokemons.filter].map((e) => 
        <PokemonCard showInfo={showInfo} setShowInfo={setShowInfo} setInfo={setInfo} pokemon={e} />
        
        ):<p>There is no pokemon with this type</p>
      }
    </Wrapper>
  )
}

export default PokemonCardList
