import styled from 'styled-components';

export const HomeStyled = styled.div`
  margin-top: 50px;
  text-align: center;
`;

export const TitleStyled = styled.div`
  h1 {
    font-size: 36px;
    font-weight: bolder;
  }

  & > .border {
    width: 80%;
    height: 0.2rem;
    background-color: black;
    margin: auto;
    margin-top: 1rem;
  }
`;

export const NoticeStyeld = styled.div`
  width: 80%;
  height: 80vh;
  /* background-color: aliceblue; */
  margin: auto;
  margin-top: 2rem;
`;
