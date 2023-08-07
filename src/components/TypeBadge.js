import React from 'react'
import Wrapper from '../assets/wrappers/TypeBadge'
import { useSelector } from 'react-redux'

const TypeBadge = ({value}) => {
  const types = useSelector(state=>state.pokemonType.colors)

  return (
    <Wrapper color={types[value]}>
      {value}
    </Wrapper>
  )
}

export default TypeBadge
