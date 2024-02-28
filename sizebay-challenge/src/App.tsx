import './app.ts';
import { Modal } from '@components/modal/index.tsx';
import { Container } from './app.ts';
import { ProgressBar } from '@components/progressBar/index.tsx';

export const App = () => {
  return (
    <Container>
      <Modal>
        <ProgressBar progress={50} />
      </Modal>
    </Container>
  );
};
