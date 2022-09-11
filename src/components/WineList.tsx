import styled from "styled-components";
import { popularProducts } from "../data";
import ProductItem from "./ProductItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: red;
`;

const WineList = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default WineList;
