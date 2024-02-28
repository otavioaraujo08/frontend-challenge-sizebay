import styled from 'styled-components';

interface ProgressBarProps {
  progress: number;
}

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

const Progress = styled.div<{ $progress: number }>`
  width: ${(props) => props.$progress}%;
  height: 100%;
  background-color: #5de290;
`;

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <ProgressBarContainer>
      <Progress $progress={progress} />
    </ProgressBarContainer>
  );
};
