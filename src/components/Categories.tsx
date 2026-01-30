import { Grid } from "@mui/material";
import CategoryItem from "./CategoryItem";
import { categories } from "../data";

const Categories = () => {
  return (
    <Grid container spacing={2} sx={{ maxWidth: 1400, margin: "0 auto" }}>
      {categories.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.title}>
          <CategoryItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Categories;
