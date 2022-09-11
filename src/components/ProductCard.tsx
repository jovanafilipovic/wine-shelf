import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const ProductCard = () => {
  return (
    <Card>
      <CardHeader
        className="card-header"
        title="Tamjanika White"
        subheader="Zvonko Bogdan"
      />
      <CardMedia
        component="img"
        height="230"
        image="/static/images/cards/paella.jpg"
        alt="wine"
      />
      <Typography className="price" paragraph>
        450
      </Typography>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShoppingBagIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
