import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  width: 42.5rem;
  height: 1.5rem;
  background: #e4e4e4 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  overflow: hidden;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const ProgressBar = () => {
  return <ProgressBarContainer></ProgressBarContainer>;
};
