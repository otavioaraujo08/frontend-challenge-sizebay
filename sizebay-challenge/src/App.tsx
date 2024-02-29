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
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [task, setTask] = useState<string>('');

  const handleCreateTask = () => {
    setTasks([...tasks, { title: task, status: 'pending' }]);
    setTask('');
  };

  const handleUpdateInputTask = (task: string) => {
    setTask(task);
  };

  return (
    <Container>
      <Modal>
        <ProgressBar progress={50} />

        <Filter />

        <Input
          onClick={handleCreateTask}
          value={task}
          onChange={handleUpdateInputTask}
        />

        <Tasks tasksList={tasks || []} />
      </Modal>
    </Container>
  );
};
