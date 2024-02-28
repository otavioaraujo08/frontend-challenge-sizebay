import { dayOfWeek } from '@utils/dayOfWeek';
import { monthOfYear } from '@utils/monthOfYear';
import styled from 'styled-components';

const Container = styled.div`
  width: 42.5rem;
  height: 4.9375rem;
  margin-top: 3.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

const DateContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;

const DayText = styled.h1`
  font-size: 4.9375rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0px;
  color: #848484;

  @media (max-width: 1000px) {
    font-size: 3.75rem;
  }

  @media (max-width: 500px) {
    font-size: 3.35rem;
  }
`;

const MonthYearContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DayMonthYearText = styled.h1<{ $year?: boolean; $day?: boolean }>`
  padding-top: ${(props) => (props.$day ? '1.39rem' : 0)};
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  font-weight: ${(props) => (props.$year ? 300 : 400)};
  font-style: normal;
  letter-spacing: 0px;
  color: #848484;

  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }

  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const Header = () => {
  const date = new Date();

  return (
    <Container>
      <DateContainer>
        <DayText>07</DayText>

        <MonthYearContainer>
          <DayMonthYearText>{monthOfYear}</DayMonthYearText>

          <DayMonthYearText $year>{date.getFullYear()}</DayMonthYearText>
        </MonthYearContainer>
      </DateContainer>

      <div>
        <DayMonthYearText $day>{dayOfWeek}</DayMonthYearText>
      </div>
    </Container>
  );
};
