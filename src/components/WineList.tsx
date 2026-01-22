import { Grid } from "@mui/material";
import ProductItem from "./ProductItem";
import { popularProducts } from "../data";

const WineList = () => {
  return (
    <Grid container spacing={2}>
      {popularProducts.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
          <ProductItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default WineList;
