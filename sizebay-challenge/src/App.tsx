import './app.ts';
import { Modal } from '@components/modal/index.tsx';
import { Container } from './app.ts';
import { ProgressBar } from '@components/progressBar/index.tsx';
import { Filter } from '@components/filter/index.tsx';
import { Input } from '@components/input/index.tsx';
import { useState } from 'react';
import { Tasks } from '@components/tasks/index.tsx';

export type FilterTitles = 'none' | 'pending' | 'done';

export interface TaskModel {
  title: string;
  status: 'pending' | 'done';
}

export const App = () => {
  const [filter, setFilter] = useState<FilterTitles>('none');
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [task, setTask] = useState<string>('');

  const handleChangeFilter = (
    filterValue: FilterTitles,
    clearFilter?: boolean
  ) => {
    if (clearFilter || filter === filterValue) {
      return setFilter('none');
    }

    setFilter(filterValue);
  };

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

        <Filter onClick={handleChangeFilter} currentFilter={filter} />

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
