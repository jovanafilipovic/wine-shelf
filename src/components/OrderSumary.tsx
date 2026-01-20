import { Box, Typography, Button } from "@mui/material";

const OrderSummary = () => {
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

      {[
        { label: "Subtotal", value: "$ 80" },
        { label: "Estimated Shipping", value: "$ 5.90" },
        { label: "Shipping Discount", value: "$ -5.90" },
        { label: "Total", value: "$ 80" },
      ].map((item) => (
        <Box
          key={item.label}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "brown",
            my: 3,
          }}
        >
          <Typography>{item.label}</Typography>
          <Typography>{item.value}</Typography>
        </Box>
      ))}

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
