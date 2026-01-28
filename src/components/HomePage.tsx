import Slider from "./Slider";
import Categories from "./Categories";
import { Container } from "@mui/material";
import NewProducts from "./NewProducts";

const HomePage = () => {
  return (
    <>
      <Slider></Slider>
      <Container
        disableGutters // remove default padding/margin
        sx={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: 2,
          display: "flex",
          flexWrap: "wrap",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <Categories />
        <NewProducts />
      </Container>
    </>
  );
};

export default HomePage;
