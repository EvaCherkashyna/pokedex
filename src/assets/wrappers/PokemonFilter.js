
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  
  margin: 0;
  height: fit-content;

  color: black;
  
  background-color: white;
  border-radius: 10px;

  & .select-container{
    display: flex;
    width:200px;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    cursor: pointer;
    & .selected-option{
      text-transform:capitalize;
    }
  }

  & .options-list{
    position: absolute;
    top: 50px;
    right: 0;
    
    display: flex;
    width: 350px;
    height: 230px;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 4px ;
    padding: 10px;
    
    border-radius:20px ;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    box-shadow: 20px 20px 20px #bebebe, -20px 7px 20px #ffffff;
    & .option{
      border-radius:4px ;
      cursor: pointer;
      list-style: none;
      padding: 3px;
      text-transform:capitalize;
      &:hover{
        background-color: #c7c7c7;
      }
    }
  }
  @media screen and (max-width: 1040px) {
    & .select-container{
      width:160px;
      height: 40px;
    }
  }
  @media screen and (max-width: 780px) {
    & .select-container{
      width:160px;
      height: 40px;
    }  
  }
  @media screen and (max-width: 480px) {
    height: 30px;
    & .select-container{
      width:120px;
      height: 30px;
    }
    & .options-list{
      height: 340px;
      width: 200px;
    }
  }
`

export default Wrapper