import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  background-color: white;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  color: brown;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductQuantity = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: brown;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: #eee;
  padding: 0.7rem;
`;

const ProductAmount = styled.div`
  font-size: 20px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 25px;
  letter-spacing: 2px;
  font-weight: 200;
  margin-top: 1rem;
`;

const ShoppingBagItem = () => {
  return (
    <>
      <Product>
        <ProductDetail>
          <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
          <Details>
            <ProductName>
              <b>Product:</b> JESSIE THUNDER SHOES
            </ProductName>
            <ProductId>
              <b>Product ID:</b> 93813718293
            </ProductId>
            <ProductQuantity>
              <b>Quantity:</b> 2
            </ProductQuantity>
          </Details>
        </ProductDetail>
        <PriceDetail>
          <ProductAmountContainer>
            <Add />
            <ProductAmount>2</ProductAmount>
            <Remove />
          </ProductAmountContainer>
          <ProductPrice>$ 30</ProductPrice>
        </PriceDetail>
      </Product>
      <Product>
        <ProductDetail>
          <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
          <Details>
            <ProductName>
              <b>Product:</b> HAKURA T-SHIRT
            </ProductName>
            <ProductId>
              <b>ID:</b> 93813718293
            </ProductId>
            <ProductQuantity>
              <b>Quantity:</b> 2
            </ProductQuantity>
          </Details>
        </ProductDetail>
        <PriceDetail>
          <ProductAmountContainer>
            <Add />
            <ProductAmount>1</ProductAmount>
            <Remove />
          </ProductAmountContainer>
          <ProductPrice>$ 20</ProductPrice>
        </PriceDetail>
      </Product>
    </>
  );
};

export default ShoppingBagItem;
