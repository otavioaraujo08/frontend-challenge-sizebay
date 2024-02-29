import styled from 'styled-components';
import { FilterTitles, TaskModel } from 'App';
import { useEffect, useState } from 'react';

export const Container = styled.div`
  width: 42.5rem;
  max-height: 13.5rem;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 1rem;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 9px;
  }

  &::-webkit-scrollbar-track {
    background-color: #eee;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const ContainerTask = styled.div`
  width: 98%;
  min-height: 2.5rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: flex-start;
  padding-left: 0.5rem;
  background: #f4f4f4 0% 0% no-repeat padding-box;
  border: 1px solid #dbdbdb;
  border-radius: 4px;

  @media (max-width: 900px) {
    width: 96%;
  }
`;

export const TaskTitle = styled.h1`
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #848484;
  font-size: 1.18rem;
  font-family: Roboto;
  font-weight: 400;
  letter-spacing: 0px;

  @media (max-width: 900px) {
    font-size: 0.875rem;
  }
`;

export const TextHelperContainer = styled.div`
  width: 42.5rem;
  height: 3rem;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const TextHelper = styled.h1`
  text-align: left;
  font-size: 1.18rem;
  font-family: Roboto;
  font-weight: 400;
  letter-spacing: 0px;
  color: #848484;

  @media (max-width: 900px) {
    font-size: 0.875rem;
  }

  & > strong {
    text-decoration: underline;
    font-weight: 500;
    cursor: pointer;
  }
`;

interface TasksProps {
  tasksList: TaskModel[] | [];
  searchFilter: string;
  clearFilter: () => void;
  currentFilter: FilterTitles;
}
export const Tasks = ({
  tasksList,
  searchFilter,
  clearFilter,
  currentFilter,
}: TasksProps) => {
  const [filteredTasks, setFilteredTasks] = useState<TaskModel[]>(tasksList);

  useEffect(() => {
    const newFilteredTasks = tasksList.filter((item) => {
      const matchesSearch = item.title.includes(searchFilter);
      const matchesCurrentFilter =
        currentFilter === 'none' ||
        (currentFilter === 'pending' && item.status === 'pending') ||
        (currentFilter === 'done' && item.status === 'done');
      return matchesSearch && matchesCurrentFilter;
    });
    setFilteredTasks(newFilteredTasks);
  }, [searchFilter, tasksList, currentFilter]);

  if (!tasksList.length) {
    return (
      <TextHelperContainer>
        <TextHelper>
          There are no items marked as{' '}
          {currentFilter !== 'done' ? 'pending' : 'done'}.{' '}
          <strong onClick={clearFilter}>Clear the filter here</strong> to see
          all items.
        </TextHelper>
      </TextHelperContainer>
    );
  }

  if (searchFilter && !filteredTasks.length) {
    return (
      <TextHelperContainer>
        <TextHelper>
          Your search found no results.{' '}
          <strong onClick={clearFilter}>Clean the search here</strong> to see
          all items.
        </TextHelper>
      </TextHelperContainer>
    );
  }

  return (
    <Container>
      {filteredTasks.map(({ title }) => (
        <ContainerTask key={title}>
          <TaskTitle>{title}</TaskTitle>
        </ContainerTask>
      ))}
    </Container>
  );
};
