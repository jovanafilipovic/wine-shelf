import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Typography, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import "../styles.css";

const ShoppingBagItem = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.cart.items);

  return (
    <Box>
      {products.map((product) => (
        <Box key={product.id} className="shopping-bag-item">
          <Box className="shopping-bag-item-details">
            <Box
              component="img"
              src={product.img}
              className="shopping-bag-item-image"
            />
            <Box className="shopping-bag-item-info">
              <Typography>
                <b>Product:</b> {product.title}
              </Typography>
              <Typography>
                <b>Price:</b> {product.price}
              </Typography>
              <Typography>
                <b>Quantity:</b> {product.quantity}
              </Typography>
            </Box>
          </Box>
          <Box className="shopping-bag-item-price">
            <Box className="shopping-bag-item-amount">
              <IconButton onClick={() => dispatch(addToCart(product))}>
                <AddIcon />
              </IconButton>

              <Typography className="shopping-bag-item-quantity">
                {product.quantity}
              </Typography>

              <IconButton onClick={() => dispatch(removeFromCart(product.id))}>
                <RemoveIcon />
              </IconButton>
            </Box>
            <Typography className="shopping-bag-item-total">
              {(product.price * product.quantity).toFixed(2)} RSD
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ShoppingBagItem;
