import styled from 'styled-components'

const Wrapper = styled.header`
position: fixed;
top: 0;
left: 0;
z-index: 2;

display: flex;
width: 100%;
height: 100px;
justify-content: space-between;
align-items: center;
padding: 20px 9rem;

color:white;

background-color: black;

  & .logo{
    font-size: 28px;
    margin: 0;
    line-height: 60px;
  }
  @media screen and (max-width: 1040px) {
    padding:2rem 6rem;
    height: 80px;
    & .logo{
      font-size: 26px;
      margin: 0;
      line-height: 40px;
    }
  }

  @media screen and (max-width: 780px) {
    padding:2rem 4rem;
    height: 80px;
    & .logo{
      font-size: 24px;
      line-height: 40px;
    }
  }
  @media screen and (max-width: 480px) {
    padding:1rem 3rem;
    height: 60px;
    & .logo{
      font-size: 20px;
      line-height: 20px;
    }
  }
`

export default Wrapper