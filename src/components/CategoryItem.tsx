import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterByCategory } from "../redux/wineSlice";

const CategoryItem = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(filterByCategory(item.title));
    navigate("/wines");
  };
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: 500,
        overflow: "hidden",
        borderRadius: 2,
      }}
    >
      <Box
        component="img"
        src={item.img}
        alt={item.title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.3s",
          "&:hover": { transform: "scale(1.05)" },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "white",
            mb: 2,
            fontWeight: 600,
            textAlign: "center",
            letterSpacing: 1,
          }}
        >
          {item.title}
        </Typography>

        <Button
          variant="contained"
          sx={{
            color: "gray",
            backgroundColor: "white",
            "&:hover": { backgroundColor: "#f0f0f0" },
          }}
          onClick={handleClick}
        >
          SHOP NOW
        </Button>
      </Box>
    </Box>
  );
};

export default CategoryItem;
