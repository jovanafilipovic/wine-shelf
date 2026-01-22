import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import "./Product.css";

const ProductItem = ({ item }) => {
  return (
    // ZAMENI DINAMICKIM VREDNOSTIMA
    <Card sx={{ maxWidth: 345, maxHeight: 420 }}>
      <CardHeader title="Shrimp and Chorizo Paella" />
      <CardMedia
        component="img"
        height="300"
        image={"/static/images/cards/paella.jpg"}
        alt="Paella dish"
      />
      <CardActions
        disableSpacing
        sx={{
          justifyContent: "center",
          px: 2,
          pb: 2,
        }}
      >
        <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton aria-label="shopping bag">
          <ShoppingBagIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
