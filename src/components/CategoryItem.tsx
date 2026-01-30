import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterByCategory } from "../redux/wineSlice";
import "../styles.css";

const CategoryItem = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(filterByCategory(item.title));
    navigate("/wines");
    window.scrollTo(0, 0);
  };

  return (
    <Box className="category-item">
      <Box component="img" src={item.img} alt={item.title} />

      <Box className="category-item-overlay">
        <Typography variant="h5" className="category-item-title">
          {item.title}
        </Typography>

        <Button
          variant="contained"
          className="category-item-button"
          onClick={handleClick}
        >
          SHOP NOW
        </Button>
      </Box>
    </Box>
  );
};

export default CategoryItem;
