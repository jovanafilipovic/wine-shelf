import { Box, Typography, Button } from "@mui/material";
import OrderSummary from "./OrderSumary";
import ShoppingBagItem from "./ShoppingBagItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../styles.css";

const ShoppingBag = () => {
  return (
    <Box className="shopping-bag-root">
      <Box className="shopping-bag-wrapper">
        <Typography variant="h4" className="shopping-bag-title">
          YOUR BAG
        </Typography>

        <Box className="shopping-bag-top">
          <Button
            variant="outlined"
            className="shopping-bag-back-btn"
            href="/wines"
          >
            <ArrowBackIcon />
            CONTINUE SHOPPING
          </Button>
        </Box>

        <Box className="shopping-bag-content">
          <Box className="shopping-bag-items">
            <ShoppingBagItem />
          </Box>

          <Box className="shopping-bag-summary">
            <OrderSummary />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ShoppingBag;
