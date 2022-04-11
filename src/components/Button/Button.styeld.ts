import styled from 'styled-components';

export const ButtonStyeld = styled.button`
  border: none;
  background-color: ${(props) => props.color};
  width: 100px;
  height: 40px;
  color: white;
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    transform: scale(0.98);
  }
`;
