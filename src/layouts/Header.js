import React from 'react'
import Wrapper from '../assets/wrappers/Header'
import { useSelector } from 'react-redux'
import PokemonFilter from '../components/PokemonFilter'

const Header = () => {
  const types = useSelector(state => state.pokemonType.types)

  return (
    <Wrapper >
      <h1 className="logo">Pokedex</h1>
      <PokemonFilter/>
    </Wrapper>
  )
}

export default Header
