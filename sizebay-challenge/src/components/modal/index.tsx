import styled from 'styled-components';
import { Header } from './header';

const Container = styled.div`
  width: 50rem;
  height: 40.625rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

interface ModalProps {
  children: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  return (
    <Container>
      <Header />

      {children}
    </Container>
  );
};
