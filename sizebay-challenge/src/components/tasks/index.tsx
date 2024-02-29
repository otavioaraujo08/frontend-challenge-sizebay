import styled from 'styled-components';
import { TaskModel } from 'App';

export const Container = styled.div`
  width: 42.5rem;
  max-height: 19rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const ContainerTask = styled.div`
  width: 98.6%;
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
  clearFilter: () => void;
}

export const Tasks = ({ tasksList, clearFilter }: TasksProps) => {
  return tasksList?.length ? (
    <Container>
      {tasksList.map((task) => {
        const { title } = task;

        return (
          <ContainerTask key={title}>
            <TaskTitle>{title}</TaskTitle>
          </ContainerTask>
        );
      })}
    </Container>
  ) : (
    <TextHelperContainer>
      <TextHelper>
        There are no items marked as done.{' '}
        <strong onClick={clearFilter}>Clear the filter here</strong> to see all
        items.
      </TextHelper>
    </TextHelperContainer>
  );
};
