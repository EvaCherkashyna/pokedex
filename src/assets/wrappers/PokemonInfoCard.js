import styled from 'styled-components'

const Wrapper = styled.article`
  display: flex;
  width: 30%;
  margin-left: 30px;
  min-height: 300px;
  min-width: fit-content;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px 20px 20px;

  cursor: pointer;
  background-color: white;
  border-radius: 20px;
  background: #e0e0e0;
  box-shadow:  30px 30px 60px #bebebe,
              -30px -30px 60px #ffffff;
  & .table{
    width: 85%;
    & tr{
      margin: 5px;
      & td{  
        padding: 5px;
      }
    }
  }
  & .pokemon-img{
    width: 80%;
  }
  & .pokemon-name{
    margin: 0 0 20px 0;
    font-size: 20px;
    text-transform: capitalize;
  }
  @media screen and (max-width: 1040px) {
    width: 40%;
    min-width: 40%;
    padding: 0px 10px 20px 10px;
  }
  @media screen and (max-width: 560px) {
    margin-left: 20px;
    & .pokemon-name{
    margin: 0 0 10px 0;
    font-size: 16px;
    text-transform: capitalize;
  }
    & .table{
   font-size: 14px;
  }
  }
  @media screen and (max-width: 480px) {
    margin-left: 0px;
    margin-bottom: 20px;
    width:  90%;
    min-width: fit-content;
    & .pokemon-name{
    margin: 0 0 10px 0;
    font-size: 16px;
    text-transform: capitalize;
  }
    & .table{
   font-size: 14px;
  }
  }
  @media screen and (max-width: 380px) {
    width:100%;
  }
`

export default Wrapper