import { FiltersList, filters } from '@utils/filters';
import { SiVerizon } from 'react-icons/si';
import { FilterTitles } from 'App';
import styled from 'styled-components';

const Container = styled.div`
  width: 42.5rem;
  min-height: 2.5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  align-items: center;
  text-align: center;

  @media (max-width: 900px) {
    width: 90%;
    gap: 0.8rem;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: 766px) {
    width: 100%;
    justify-content: right;
  }
`;

const FilterButton = styled.button`
  width: 4rem;
  height: 2.0625rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dbdbdb;
  border-radius: 17px;
  text-align: center;
  font-size: 0.8rem;
  font-family: Roboto;
  letter-spacing: 0px;
  color: #848484;

  &:hover {
    cursor: pointer;
    background: #efefef;
    border: 1px solid #4da6b3;
    color: #4da6b3;
  }
`;

const CurrentFilterButton = styled.button`
  width: 5.25rem;
  height: 2.0625rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #4da6b3;
  color: #4da6b3;
  border-radius: 17px;
  text-align: center;
  font-size: 0.8rem;
  font-family: Roboto;
  letter-spacing: 0px;

  &:hover {
    cursor: pointer;
    background: #efefef;
    border: 1px solid #4da6b3;
    color: #4da6b3;
  }
`;

const FilterInput = styled.input`
  width: 28.125rem;
  height: 2.5rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding-left: 1rem;
  font-size: 0.8rem;
  font-family: Roboto;
  letter-spacing: 0px;
  color: #848484;

  background-size: 1.5rem;
  background-image: url('search.png');
  background-position: 98% 0.5rem;
  background-repeat: no-repeat;

  @media (max-width: 766px) {
    width: 100%;
  }
`;

interface FilterProps {
  onClick: (text: FilterTitles) => void;
  onChange: (search: string) => void;
  currentFilter: FilterTitles;
  currentSearchFilter: string;
}

export const Filter = ({
  onClick,
  currentFilter,
  onChange,
  currentSearchFilter,
}: FilterProps) => {
  return (
    <Container>
      <ButtonsContainer>
        {filters.map((filter: FiltersList) => {
          const { name, value } = filter;

          return currentFilter === value ? (
            <CurrentFilterButton onClick={() => onClick(value)} key={value}>
              <SiVerizon size={10} /> {name}
            </CurrentFilterButton>
          ) : (
            <FilterButton onClick={() => onClick(value)} key={value}>
              {name}
            </FilterButton>
          );
        })}
      </ButtonsContainer>

      <FilterInput
        type="text"
        placeholder="Search items"
        maxLength={50}
        value={currentSearchFilter}
        onChange={(e) => onChange(e.target.value)}
      />
    </Container>
  );
};
