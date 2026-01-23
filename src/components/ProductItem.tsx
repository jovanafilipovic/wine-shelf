import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  IconButtonProps,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

const ProductItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const showSnackbar = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const dispatch = useDispatch();

  return (
    <>
      <Card sx={{ maxWidth: 345, minHeight: 420 }}>
        <CardHeader title={item.title} />
        <CardMedia
          component="img"
          height="300"
          image={item.img}
          alt={item.title}
        />
        <CardActions
          disableSpacing
          sx={{
            justifyContent: "center",
            px: 2,
            pb: 2,
          }}
        >
          <IconButton
            aria-label="add to favorites"
            onClick={() => showSnackbar("Added to favorites")}
          >
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton
            aria-label="shopping bag"
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
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{
              justifyContent: "right",
            }}
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
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
