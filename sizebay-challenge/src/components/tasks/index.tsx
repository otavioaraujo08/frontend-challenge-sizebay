import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6';
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
  cursor: pointer;

  @media (max-width: 900px) {
    width: 96%;
  }
`;

export const ContainerTaskWithOptions = styled.div`
  width: 98%;
  min-height: 2.5rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding-left: 0.5rem;
  background: #f4f4f4 0% 0% no-repeat padding-box;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  cursor: pointer;

  & > div {
    display: flex;
    height: 100%;
    align-items: center;
  }

  @media (max-width: 900px) {
    width: 96%;
  }
`;

export const ActionsButtons = styled.button<{ $isDelete?: boolean }>`
  width: 2.75rem;
  height: 3rem;
  background: ${(props) => (props.$isDelete ? '#e34f4f' : '#5DE290')} 0% 0%
    no-repeat padding-box;
  border: none;
  opacity: 1;
  cursor: pointer;
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
  deleteTask: (task: string) => void;
  updateTaskStatus: (title: string, newStatus: 'pending' | 'done') => void;
}
export const Tasks = ({
  tasksList,
  searchFilter,
  clearFilter,
  currentFilter,
  deleteTask,
  updateTaskStatus,
}: TasksProps) => {
  const [filteredTasks, setFilteredTasks] = useState<TaskModel[]>(tasksList);
  const [containerClick, setContainerClick] = useState<string>('');

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
      {filteredTasks.map(({ title }) => {
        return containerClick === title ? (
          <ContainerTaskWithOptions
            key={title}
            onClick={() => setContainerClick(title)}
          >
            <TaskTitle>{title}</TaskTitle>

            <div>
              <ActionsButtons $isDelete onClick={() => deleteTask(title)}>
                <FaCircleMinus size={18} color="#ffffff" />
              </ActionsButtons>

              <ActionsButtons>
                <FaCirclePlus
                  size={18}
                  color="#ffffff"
                  onClick={() => updateTaskStatus(title, 'done')}
                />
              </ActionsButtons>
            </div>
          </ContainerTaskWithOptions>
        ) : (
          <ContainerTask key={title} onClick={() => setContainerClick(title)}>
            <TaskTitle>{title}</TaskTitle>
          </ContainerTask>
        );
      })}
    </Container>
  );
};
