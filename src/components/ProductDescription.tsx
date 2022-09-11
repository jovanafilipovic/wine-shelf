import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  min-height: 200vh;
  background-color: #f6f7c1;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  background-color: #a35a41;
  opacity: 95%;
`;

const Title = styled.h1`
  margin-top: 3rem;
  letter-spacing: 1px;
  font-size: 30px;
  font-weight: 50;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: white;
`;

const Desc = styled.p`
  margin: 50px 0px;
  letter-spacing: 1px;
  text-align: justify;
  color: white;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 25px;
  margin-top: 5rem;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: white;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: white;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  color: white;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  font-weight: bold;
  margin-top: 4rem;
  color: brown;
`;

const Product = () => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src="https://cdn.shopify.com/s/files/1/2216/3143/products/Bovin_Alexandar_800x800_c1cf79a1-1320-4dfe-bec8-1d50036c055a_1600x.jpg?v=1621822942" />
        </ImgContainer>
        <InfoContainer>
          <Title>Alexandar Bovin</Title>
          <Desc>
            The Tikvesh district has approximately 11,000 ha of grapes, which
            represents about one third of the total vineyard area of Macedonia.
            It is the driest area of Balkan Peninsula. The maximum daily
            temperature during July and August is regularly around 40ºC. With a
            deep plowing layer, the rich soils supply the grapes with a constant
            supply of water.
          </Desc>
          <Price>$ 20</Price>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
          </AddContainer>
          <Button>Add to card</Button>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
