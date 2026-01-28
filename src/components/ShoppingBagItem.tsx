import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Typography, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addToCart, removeFromCart } from "../redux/cartSlice";

const ShoppingBagItem = () => {
  const dispatch = useDispatch();

  const products = useSelector((state: RootState) => state.cart.items);

  return (
    <Box>
      {products.map((product) => (
        <Box
          key={product.id}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginY: 2,
            backgroundColor: "white",
            p: 2,
          }}
        >
          {/* Product Details */}
          <Box sx={{ display: "flex", flex: 2, color: "brown" }}>
            <Box
              component="img"
              src={product.img}
              sx={{ width: 200, objectFit: "cover" }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                p: 2,
              }}
            >
              <Typography>
                <b>Product: </b>
                {product.title}
              </Typography>
              <Typography>
                <b>Price:</b> {product.price}
              </Typography>
              <Typography>
                <b>Quantity:</b> {product.quantity}
              </Typography>
            </Box>
          </Box>

          {/* Price & Amount */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "brown",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                backgroundColor: "#eee",
                p: 1,
                borderRadius: 1,
              }}
            >
              <IconButton onClick={() => dispatch(addToCart(product))}>
                <AddIcon />
              </IconButton>
              <Typography sx={{ mx: 1, fontSize: 20 }}>
                {product.quantity}
              </Typography>
              <IconButton onClick={() => dispatch(removeFromCart(product.id))}>
                <RemoveIcon />
              </IconButton>
            </Box>
            <Typography
              sx={{ fontSize: 25, fontWeight: 200, letterSpacing: 2 }}
            >
              {(product.price * product.quantity).toFixed(2)} RSD
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ShoppingBagItem;
