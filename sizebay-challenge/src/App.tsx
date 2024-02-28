import './app.ts';
import { Modal } from '@components/modal/index.tsx';
import { Container } from './app.ts';
import { ProgressBar } from '@components/progressBar/index.tsx';
import { Filter } from '@components/filter/index.tsx';

export const App = () => {
  return (
    <Container>
      <Modal>
        <ProgressBar progress={50} />

        <Filter />
      </Modal>
    </Container>
  );
};
