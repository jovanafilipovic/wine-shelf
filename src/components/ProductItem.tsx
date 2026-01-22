import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 345, maxHeight: 420 }}>
      <CardHeader title={item.title} />
      <CardMedia
        component="img"
        height="300"
        image={item.img}
        alt={item.title}
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
        <IconButton
          aria-label="shopping bag"
          onClick={() =>
            dispatch(
              addToCart({
                id: item.id,
                title: item.title,
                price: item.price,
                img: item.img,
              })
            )
          }
        >
          <ShoppingBagIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
