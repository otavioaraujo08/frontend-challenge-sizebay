import './app.ts';
import { Modal } from '@components/modal/index.tsx';
import { Container } from './app.ts';
import { ProgressBar } from '@components/progressBar/index.tsx';
import { Filter } from '@components/filter/index.tsx';
import { Input } from '@components/input/index.tsx';
import { useState } from 'react';
import { Tasks } from '@components/tasks/index.tsx';

export interface TaskModel {
  title: string;
  status: 'pending' | 'done';
}

export const App = () => {
  const [tasks, setTasks] = useState<TaskModel[]>();

  return (
    <Container>
      <Modal>
        <ProgressBar progress={50} />

        <Filter />

        <Input />

        <Tasks tasksList={tasks || []} />
      </Modal>
    </Container>
  );
};
