import styled from 'styled-components';
import { IoAddCircle } from 'react-icons/io5';

const Container = styled.div`
  width: 42.5rem;
  height: 3rem;
  display: flex;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

const InputStyled = styled.input`
  width: 42rem;
  height: 2.5rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  padding-left: 1rem;
  font-size: 0.8rem;
  font-family: Roboto;
  letter-spacing: 0px;
  color: #848484;
  opacity: 0.5;
`;

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.75rem;
  height: 2.7rem;
  background: #4da6b3;
  border-radius: 0px 4px 4px 0px;
  border: 1px solid #dbdbdb;

  &:hover {
    cursor: pointer;
  }
`;

const CircleAdd = styled(IoAddCircle)`
  background: #4da6b3;
  color: #ffffff;
`;

export const Input = () => {
  return (
    <Container>
      <InputStyled type="text" placeholder="Add new item…" maxLength={50} />

      <ButtonStyled>
        <CircleAdd size={27} />
      </ButtonStyled>
    </Container>
  );
};