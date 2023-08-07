
import styled from 'styled-components'

const Wrapper = styled.article`
  display: flex;
  min-height: fit-content;
  width:  ${state => state.showInfo ? "20%" : "26%"};
  flex-direction: column;
  align-items: center;
  padding: 0px 20px 20px 20px;

  border-radius: 10px;
  background-color: white;
  border-radius: 20px;
  background: #e0e0e0;
  box-shadow:  30px 30px 60px #bebebe,
              -30px -30px 60px #ffffff;
  &:hover{
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    background: linear-gradient(145deg, #cacaca, #f0f0f0);
    box-shadow:  20px 20px 60px #bebebe,
                -20px -20px 60px #ffffff;
  }
  & .pokemon-img{
    width: 80%;
  }
  & .pokemon-name{
    margin: 0 0 20px 0;
    font-size: 20px;
    text-transform: capitalize;
  }

  @media screen and (max-width: 1400px) {
    width:   ${state => state.showInfo ? "44%" : "30%"};
  }
  @media screen and (max-width: 1040px) {
    width:   ${state => state.showInfo ? "70%" : "40%"};
  }

  @media screen and (max-width: 780px) {
    width:   ${state => state.showInfo ? "80%" : "45%"};
  }
  @media screen and (max-width: 560px) {
    width:  ${state => state.showInfo ? "100%" : "40%"};
    & .pokemon-img{
      width: 90%;
    }
    & .pokemon-name{
      font-size: 16px;
      margin: 0 0 10px 0;
    }
  }
  @media screen and (max-width: 480px) {
    width:  ${state => state.showInfo ? "90%" : "80%"};
  }
  @media screen and (max-width: 380px) {
    width:100%;
  }
`

export default Wrapper