import { Container } from "@mui/material";
import { popularProducts } from "../data";
import ProductItem from "./ProductItem";

const NewProducts = () => {
  return (
    <Container
      disableGutters
      sx={{
        maxWidth: 1400,
        margin: "0 auto",
        padding: 2,
        display: "flex",
        flexWrap: "wrap",
        gap: 2.25,
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {popularProducts.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default NewProducts;
