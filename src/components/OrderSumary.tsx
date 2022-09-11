import styled from "styled-components";

const Summary = styled.div`
  flex: 1;
  border: 2px solid white;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  margin-top: 2rem;
`;

const SummaryTitle = styled.h1`
  font-weight: 150;
  color: brown;
  font-size: 22px;
  letter-spacing: 1px;
  text-align: center;
`;

const SummaryItem = styled.div`
  margin: 2rem 0rem;
  display: flex;
  justify-content: space-between;
  color: brown;
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: brown;
  border: none;
  border-radius: 3px;
  color: white;
  font-weight: 600;
`;

const OrderSummary = () => {
  return (
    <Summary>
      <SummaryTitle>ORDER SUMMARY</SummaryTitle>
      <SummaryItem>
        <SummaryItemText>Subtotal</SummaryItemText>
        <SummaryItemPrice>$ 80</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem>
        <SummaryItemText>Estimated Shipping</SummaryItemText>
        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem>
        <SummaryItemText>Shipping Discount</SummaryItemText>
        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
      </SummaryItem>
      <SummaryItem>
        <SummaryItemText>Total</SummaryItemText>
        <SummaryItemPrice>$ 80</SummaryItemPrice>
      </SummaryItem>
      <Button>CHECKOUT NOW</Button>
    </Summary>
  );
};

export default OrderSummary;
