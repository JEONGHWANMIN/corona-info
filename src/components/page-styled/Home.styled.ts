import styled from 'styled-components';
import Bg from '../../img/background.png';

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: url('./backgroud.png') no-repeat;
  background-size: contain;

  & > .titleBox {
    display: flex;
    width: 60%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  & h1 {
    font-size: 2.7rem;

    font-family: 'Jua', sans-serif;
  }

  h2 {
    font-size: 2rem;
  }

  @media screen and (max-width: 575px) {
    .titlebox > h1 {
      font-size: 0.3rem;
    }
  }
`;
