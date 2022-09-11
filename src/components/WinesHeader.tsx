import styled from "styled-components";

const Container = styled.div`
  height: 10rem;
  background-color: pink;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: red;
`;

const Filter = styled.div`
  margin: 20px;
  background-color: pink;
`;

const FilterText = styled.span`
  font-size: 15px;
  font-weight: 600;
  margin-right: 20px;
  color: brown;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 30px;
  margin-left: 30px;
`;
const Option = styled.option``;

const WinesHeader = () => {
  return (
    <Container>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Category
            </Option>
            <Option>Red</Option>
            <Option>Rose</Option>
            <Option>White</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Region
            </Option>
            <Option>Serbia</Option>
            <Option>Montenegro</Option>
            <Option>North Macedonia</Option>
            <Option>Croatia</Option>
            <Option>Slovenia</Option>
            <Option>Albania</Option>
            <Option>Greece</Option>
            <Option>Bulgaria</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
    </Container>
  );
};

export default WinesHeader;
