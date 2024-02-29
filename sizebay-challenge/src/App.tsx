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
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [filter, setFilter] = useState<FilterTitles>('none');
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [task, setTask] = useState<string>('');

  const handleUpdateSearchFilter = (searchTitle: string) => {
    setSearchFilter(searchTitle);
  };

  const handleChangeFilter = (filterValue: FilterTitles) => {
    if (filter === filterValue) {
      return hanldeClearFilter();
    }

    setFilter(filterValue);
  };

  const handleCreateTask = () => {
    if (tasks.some((taskList) => taskList.title === task)) {
      alert('Este título já existe na lista de tarefas.');
      return;
    }

    setTasks([
      ...tasks,
      { title: task, status: filter !== 'done' ? 'pending' : 'done' },
    ]);
    setTask('');
  };

  const handleUpdateTaskStatus = (
    title: string,
    newStatus: 'pending' | 'done'
  ) => {
    const updatedTasks = tasks.map((task) => {
      if (task.title === title) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskTitle: string) => {
    const updatedTasks = tasks.filter((task) => task.title !== taskTitle);
    setTasks(updatedTasks);
  };

  const handleUpdateInputTask = (task: string) => {
    setTask(task);
  };

  const hanldeClearFilter = () => {
    setSearchFilter('');
    setFilter('none');
  };

  return (
    <Container>
      <Modal>
        <ProgressBar progress={50} />

        <Filter
          onClick={handleChangeFilter}
          currentFilter={filter}
          onChange={handleUpdateSearchFilter}
          currentSearchFilter={searchFilter}
        />

        <Input
          onClick={handleCreateTask}
          value={task}
          onChange={handleUpdateInputTask}
        />

        <Tasks
          tasksList={tasks || []}
          clearFilter={hanldeClearFilter}
          searchFilter={searchFilter}
          currentFilter={filter}
          updateTaskStatus={handleUpdateTaskStatus}
          deleteTask={handleDeleteTask}
        />
      </Modal>
    </Container>
  );
};
