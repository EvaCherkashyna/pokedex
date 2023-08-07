import React from 'react'
import Wrapper from '../assets/wrappers/PokemonCard'
import TypeBadge from './TypeBadge'
const PokemonCard = ({ pokemon,showInfo ,setShowInfo,setInfo}) => {

  const handleShowInfo =(e)=>{
    setShowInfo(true)
    setInfo(e)
  }
  console.log(pokemon)

  return (
    <Wrapper onClick={()=>handleShowInfo(pokemon)} showInfo={showInfo}>
      <img className="pokemon-img" src={pokemon.sprites.front_default} />
      <h2 className='pokemon-name'>
        {pokemon.name}
      </h2>
      <div>

        {pokemon.types.map((e) => <TypeBadge value={e.type.name} />)}
      </div>
    </Wrapper>
  )
}

export default PokemonCard
