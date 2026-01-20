import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import "./CategoryItem.css";

// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

// const Info = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const Title = styled.h1`
//   color: white;
//   margin-bottom: 20px;
// `;

const ShopNowButton = styled(Button)(({ theme }) => ({
  color: "gray",
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
}));

const CategoryItem = ({ item }) => {
  return (
    <div className="wrapper">
      <img src={item.img} className="category-image" alt="" />
      <div className="info">
        <div className="type-of-wine">{item.title}</div>
        <ShopNowButton variant="contained">SHOP NOW</ShopNowButton>
      </div>
    </div>
  );
};

export default CategoryItem;
