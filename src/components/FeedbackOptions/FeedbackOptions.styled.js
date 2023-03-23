import styled from 'styled-components';
export const ContainerButton = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  background-color: rgb(255, 251, 246);
`;
export const Button = styled.button`
  padding: 10px 15px;
  background-color: rgba(245, 126, 225, 0.637);
  color: rgb(77, 77, 77);
  border-radius: 10%;
  border: 2px solid rgba(255, 143, 236, 0.637);
  box-shadow: 2px 2px 2px gray;

  &:hover {
    background-color: rgba(247, 101, 222, 0.637);
    color: white;
  }
  &:focus {
    background-color: rgba(247, 101, 222, 0.637);
    color: white;
  }
`;
