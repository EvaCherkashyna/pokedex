import React, { useState } from 'react';
import Wrapper from '../assets/wrappers/PokemonFilter';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillCaretDown } from "react-icons/ai";
import { setFilter } from '../store/slices/Pokemons.slice';

const PokemonFilter = () => {
  const [openSelect, setOpenSelect] = useState(false);
  const options = useSelector(state => state.pokemonType.types)
  const [option, setOption] = useState("All")

  const dispatch = useDispatch()
  const handleSelect = (option) => {
    setOption(option);
    dispatch(setFilter(option))
  }
  return (
    <Wrapper onClick={() => setOpenSelect(prev => !prev)}>
      <div className='select-container'>
        <p className="selected-option">{option}</p>
        <AiFillCaretDown />
      </div>

      {openSelect && <ul className='options-list'>
        <li onClick={() => handleSelect("all")} className='option'>All</li>
        {options.map((e) => <li onClick={() => handleSelect(e.name)} className='option'>{e.name}</li>)}

      </ul>
      }
    </Wrapper>
  );
};

export default PokemonFilter;


