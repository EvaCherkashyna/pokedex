import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 2rem 9rem;
  margin-top: 100px;

  & .list-container{
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
  & .load-btn{
    margin-top: 20px;
    width: max-content;
    background-color: black;
    padding:10px 20px;
    color: white;
    font-size:20px;
    border: 0;
    border-radius: 5px;
    font-weight: 600;
    background: linear-gradient(145deg, #000000, #252525);
    box-shadow:  4px 4px 8px #bebebe,
              -4px -4px 8px #ffffff;
              transition: all 0.3s ease-in-out;
    &:hover{
      background: linear-gradient(135deg, #1b1b1b, #242424);
    }
  }
  @media screen and (max-width: 1040px) {
    padding:2rem 6rem;
    margin-top: 80px;
  }
  @media screen and (max-width: 780px) {
    padding:1rem 4rem;
  }
  @media screen and (max-width: 480px) {
    padding:1rem 4rem;
    margin-top: 60px;
    & .list-container{
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;  
    }
  }
  
`

export default Wrapper