import { Box, Typography, Button } from "@mui/material";
import OrderSummary from "./OrderSumary";
import ShoppingBagItem from "./ShoppingBagItem";

const ShoppingBag = () => {
  return (
    <Box sx={{ minHeight: "200vh" }}>
      <Box sx={{ p: { xs: 2, md: 6 } }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            color: "brown",
            fontFamily:
              '"Trebuchet MS","Lucida Sans Unicode","Lucida Grande","Lucida Sans",Arial,sans-serif',
            mb: 4,
          }}
        >
          YOUR BAG
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              color: "brown",
              borderColor: "brown",
              fontWeight: 600,
              "&:hover": {
                borderColor: "brown",
                backgroundColor: "rgba(165,42,42,0.08)",
              },
            }}
            href="/wines"
          >
            CONTINUE SHOPPING
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box sx={{ flex: 3 }}>
            <ShoppingBagItem />
          </Box>

          <Box sx={{ flex: 1 }}>
            <OrderSummary />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ShoppingBag;
