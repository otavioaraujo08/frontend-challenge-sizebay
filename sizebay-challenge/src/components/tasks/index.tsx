import styled from 'styled-components';
import { TaskModel } from 'App';

export const Container = styled.div``;

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
}

export const Tasks = ({ tasksList }: TasksProps) => {
  return tasksList?.length ? (
    <Container>
      {tasksList.map((task) => {
        const { title } = task;

        return <div key={title}>{title}</div>;
      })}
    </Container>
  ) : (
    <TextHelperContainer>
      <TextHelper>
        There are no items marked as done.{' '}
        <strong>Clear the filter here</strong> to see all items.
      </TextHelper>
    </TextHelperContainer>
  );
};
