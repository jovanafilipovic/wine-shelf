import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, Typography, IconButton } from "@mui/material";

const ShoppingBagItem = () => {
  const products = [
    {
      id: 93813718293,
      name: "JESSIE THUNDER SHOES",
      img: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A",
      quantity: 2,
      price: 30,
    },
    {
      id: 93813718294,
      name: "HAKURA T-SHIRT",
      img: "https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png",
      quantity: 1,
      price: 20,
    },
  ];

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
                <b>Product:</b> {product.name}
              </Typography>
              <Typography>
                <b>ID:</b> {product.id}
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
              <IconButton>
                <AddIcon />
              </IconButton>
              <Typography sx={{ mx: 1, fontSize: 20 }}>
                {product.quantity}
              </Typography>
              <IconButton>
                <RemoveIcon />
              </IconButton>
            </Box>
            <Typography
              sx={{ fontSize: 25, fontWeight: 200, letterSpacing: 2 }}
            >
              ${product.price}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ShoppingBagItem;
