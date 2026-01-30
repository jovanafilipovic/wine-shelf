import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import "../styles.css";

const ProductItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const dispatch = useDispatch();

  const handleExpandClick = () => setExpanded(!expanded);
  const showSnackbar = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  return (
    <>
      <Card className="product-card">
        <CardHeader title={item.title} className="product-card-header" />
        <CardMedia
          component="img"
          image={item.img}
          alt={item.title}
          className="product-card-media"
        />
        <CardActions className="product-card-actions">
          <IconButton onClick={() => showSnackbar("Added to favorites")}>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              dispatch(
                addToCart({
                  id: item.id,
                  title: item.title,
                  price: item.price,
                  img: item.img,
                  description: item.description,
                })
              );
              showSnackbar("Added to bag");
            }}
          >
            <ShoppingBagIcon />
          </IconButton>
          <IconButton
            onClick={handleExpandClick}
            className={`expand-more ${
              expanded ? "expand-true" : "expand-false"
            }`}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className="product-card-content">
            <Typography>Region: {item.region}</Typography>
            <Typography>Category: {item.category}</Typography>
            <Typography>Price: {item.price}</Typography>
            <Typography>Description: {item.description}</Typography>
          </CardContent>
        </Collapse>
      </Card>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductItem;
