import { Box, Typography, Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Product = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Box
        sx={{
          p: { xs: 2, md: 6 },
          display: "flex",
          gap: 6,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* IMAGE */}
        <Box sx={{ flex: 1 }}>
          <Box
            component="img"
            src="https://cdn.shopify.com/s/files/1/2216/3143/products/Bovin_Alexandar_800x800_c1cf79a1-1320-4dfe-bec8-1d50036c055a_1600x.jpg?v=1621822942"
            sx={{
              width: "100%",
              height: { xs: "300px", md: "90vh" },
              objectFit: "cover",
              borderRadius: 2,
            }}
          />
        </Box>

        {/* INFO */}
        <Box sx={{ flex: 1, px: { xs: 0, md: 6 } }}>
          <Typography
            variant="h4"
            sx={{
              mt: 3,
              letterSpacing: 1,
              fontWeight: 300,
              fontFamily:
                '"Trebuchet MS","Lucida Sans Unicode","Lucida Grande","Lucida Sans",Arial,sans-serif',
              color: "brown",
            }}
          >
            Alexandar Bovin
          </Typography>

          <Typography
            sx={{
              my: 4,
              letterSpacing: 1,
              textAlign: "justify",
              color: "text.secondary",
            }}
          >
            The Tikvesh district has approximately 11,000 ha of grapes, which
            represents about one third of the total vineyard area of Macedonia.
            It is the driest area of Balkan Peninsula. The maximum daily
            temperature during July and August is regularly around 40ºC. With a
            deep plowing layer, the rich soils supply the grapes with a constant
            supply of water.
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mt: 4,
              fontWeight: 300,
              color: "brown",
            }}
          >
            $ 20
          </Typography>

          {/* AMOUNT */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mt: 4,
            }}
          >
            <IconButton size="small">
              <RemoveIcon />
            </IconButton>

            <Box
              sx={{
                width: 32,
                height: 32,
                border: "1px solid brown",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
                color: "brown",
              }}
            >
              1
            </Box>

            <IconButton size="small">
              <AddIcon />
            </IconButton>
          </Box>

          {/* BUTTON */}
          <Button
            variant="contained"
            sx={{
              mt: 5,
              backgroundColor: "brown",
              color: "white",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#5a1e1e",
              },
            }}
          >
            Add to cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Product;
