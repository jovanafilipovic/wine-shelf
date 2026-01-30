import { Grid, Typography } from "@mui/material";
import { newProducts } from "../data";
import ProductItem from "./ProductItem";

const NewProducts = () => {
  return (
    <Grid container spacing={2} xs={12} mt={10}>
      <Grid item xs={12}>
        <Typography variant="h5" color="#6b1e1e">
          New Products
        </Typography>
      </Grid>
      {newProducts.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
          <ProductItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default NewProducts;
