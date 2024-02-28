import { Modal } from '@components/modal/index.tsx';
import './app.ts';
import { Container } from './app.ts';
import { ProgressBar } from '@components/progressBar/index.tsx';

export const App = () => {
  return (
    <Container>
      <Modal>
        <ProgressBar />
      </Modal>
    </Container>
  );
};
