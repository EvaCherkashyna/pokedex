
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px 20px;
  @media screen and (max-width: 1040px) {
    justify-content: ${state => state.showInfo ? "center" : "space-between"};
  }
  @media screen and (max-width: 480px) {
    justify-content: center;
  }
  
`

export default Wrapper