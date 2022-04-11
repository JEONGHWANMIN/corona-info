import styled from 'styled-components';

export const FormBox = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 3rem;
  height: 20rem;

  & > form {
    /* border: solid 1px black; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  form > div {
    margin: 0.5rem 0;
  }

  form > div > input {
    width: 30rem;
    height: 2.5rem;
    border: solid 1.5px skyblue;
    border-radius: 0.5rem;
  }

  form > button {
    border: none;
    background-color: skyblue;
    color: #fff;
    width: 30rem;
    height: 3rem;
    cursor: pointer;
  }

  form > button:hover {
    transform: scale(0.99);
  }

  p {
    margin-top: 1rem;
    font-size: 0.9rem;
    color: red;
  }
`;
