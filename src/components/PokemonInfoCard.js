import React from 'react'
import Wrapper from '../assets/wrappers/PokemonInfoCard'

const PokemonInfoCard = ({ pokemonInfo, setShowInfo }) => {
  console.log(pokemonInfo)
  return (
    <Wrapper onClick={()=>setShowInfo(false)}>
      <img className="pokemon-img" src={pokemonInfo.sprites.front_default} />
      <h2 className='pokemon-name'>
        {pokemonInfo.name}
      </h2>
      <table className='table'>
        <tr >
          <td >Type</td>
          <td >{pokemonInfo.types?.map((e,i)=>i!=0?<>, {e.type.name} </>:<>{e.type.name}</>)}</td>
        </tr>
        <tr >
          <td >Attack</td>
          <td >{pokemonInfo.stats[1].base_stat}</td>
        </tr>
        <tr >
          <td >Defense</td>
          <td >{pokemonInfo.stats[2].base_stat}</td>
        </tr>
        <tr >
          <td >HP</td>
          <td >{pokemonInfo.stats[0].base_stat}</td>
        </tr>
        <tr >
          <td >SP Attack</td>
          <td >{pokemonInfo.stats[3].base_stat}</td>
        </tr>
        <tr >
          <td >SP Defense</td>
          <td >{pokemonInfo.stats[4].base_stat}</td>
        </tr>
        <tr >
          <td >Speed</td>
          <td >{pokemonInfo.stats[5].base_stat}</td>
        </tr>
        <tr >
          <td >Weight</td>
          <td >{pokemonInfo.weight}</td>
        </tr>
        <tr >
          <td >Total moves</td>
          <td >{pokemonInfo.moves.length}</td>
        </tr>
      </table>
    </Wrapper>
  )
}

export default PokemonInfoCard
