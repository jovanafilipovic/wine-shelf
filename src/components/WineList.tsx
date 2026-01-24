import { Grid } from "@mui/material";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const WineList = () => {
  const { filteredWines } = useSelector((state: RootState) => state.wine);

  return (
    <Grid container spacing={2}>
      {filteredWines.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
          <ProductItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default WineList;
