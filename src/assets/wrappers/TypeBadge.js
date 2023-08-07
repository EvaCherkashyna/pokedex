import styled from 'styled-components'

const Wrapper = styled.span`
  display:inline-block;
  margin:10px 20px ;
  max-width: max-content;
  padding: 5px 15px;

  color:${props => props.color == ("white")
      || props.color == ("#c2c2c2") || props.color == ("#f4e752")
      ? "black" : "white"};

  border-radius: 5px;
  background-color: ${props => props.color};
  box-shadow:  3px 3px 6px #bebebe,
              -3px -3px 6px #ffffff;


  @media screen and (max-width: 1040px) {
    margin:7px 12px ;
  }
  @media screen and (max-width: 560px) {
    font-size:14px;
    margin:5px 10px ;
  }
`

export default Wrapper