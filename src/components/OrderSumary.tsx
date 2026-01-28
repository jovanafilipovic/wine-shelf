import { Box, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const OrderSummary = () => {
  const items = useSelector((state: RootState) => state.cart.items);

  const subTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = items.length > 0 ? 600 : 0;
  const total = subTotal + shipping;

  return (
    <Box
      sx={{
        flex: 1,
        border: "2px solid white",
        borderRadius: 2,
        p: 3,
        height: "50vh",
        mt: 4,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 300,
          color: "brown",
          letterSpacing: 1,
          textAlign: "center",
          mb: 3,
        }}
      >
        ORDER SUMMARY
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "brown",
          my: 3,
        }}
      >
        <Typography>Subtotal</Typography>
        <Typography>{subTotal.toFixed(2)} RSD</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "brown",
          my: 3,
        }}
      >
        <Typography>Estimated Shipping</Typography>
        <Typography>{shipping.toFixed(2)} RSD</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "brown",
          my: 3,
        }}
      >
        <Typography>Total</Typography>
        <Typography>{total.toFixed(2)} RSD</Typography>
      </Box>

      <Button
        fullWidth
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: "brown",
          fontWeight: 600,
          "&:hover": {
            backgroundColor: "#5a1a1a",
          },
        }}
      >
        CHECKOUT NOW
      </Button>
    </Box>
  );
};

export default OrderSummary;
