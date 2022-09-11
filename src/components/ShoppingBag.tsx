import styled from "styled-components";
import OrderSummary from "./OrderSumary";
import ShoppingBagItem from "./ShoppingBagItem";

const Container = styled.div`
  min-height: 200vh;
  background-color: #f6f7c1;
`;

const Wrapper = styled.div`
  padding: 4rem;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  color: brown;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 12px;
  font-weight: 600;
  cursor: pointer;
  background-color: white;
  color: brown;
  border-radius: 2px;
  border: ${(props) => "none"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const Info = styled.div`
  flex: 3;
`;

const ShoppingBag = () => {
  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
        </Top>
        <Bottom>
          <Info>
            <ShoppingBagItem></ShoppingBagItem>
          </Info>
          <OrderSummary></OrderSummary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default ShoppingBag;
