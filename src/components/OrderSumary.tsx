import { Box, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { createOrder } from "../redux/orderSlice";
import { clearCart } from "../redux/cartSlice";
import "../styles.css";

const OrderSummary = () => {
  const dispatch = useDispatch();

  const items = useSelector((state: RootState) => state.cart.items);
  const { currentUser, isAuthenticated } = useSelector(
    (state: RootState) => state.user
  );

  const subTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = items.length > 0 ? 600 : 0;
  const total = subTotal + shipping;

  const handleCheckout = () => {
    if (!isAuthenticated || !currentUser) {
      alert("You must be logged in to place an order.");
      return;
    }
    if (items.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const order = {
      id: crypto.randomUUID(),
      userId: currentUser.id,
      userEmail: currentUser.email,
      items: items.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
      totalPrice: total,
      createdAt: new Date().toISOString(),
    };

    dispatch(createOrder(order));
    dispatch(clearCart());

    alert("Order placed successfully.");
  };

  return (
    <Box className="order-summary">
      <Typography variant="h6" className="order-summary-title">
        ORDER SUMMARY
      </Typography>

      <Box className="order-summary-row">
        <Typography>Subtotal</Typography>
        <Typography>{subTotal.toFixed(2)} RSD</Typography>
      </Box>

      <Box className="order-summary-row">
        <Typography>Estimated Shipping</Typography>
        <Typography>{shipping.toFixed(2)} RSD</Typography>
      </Box>

      <Box className="order-summary-row">
        <Typography>Total</Typography>
        <Typography>{total.toFixed(2)} RSD</Typography>
      </Box>

      <Button
        fullWidth
        variant="contained"
        className="order-summary-button"
        onClick={handleCheckout}
      >
        CHECKOUT NOW
      </Button>
    </Box>
  );
};

export default OrderSummary;
