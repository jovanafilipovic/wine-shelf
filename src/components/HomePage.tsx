import "./HomePage.css";
import Slider from "./Slider";
import Categories from "./Categories";
import PopularProducts from "./PopularProducts";

const HomePage = () => {
  return (
    <div className="body-container">
      <div className="homepage">
        {/* <Slider></Slider> */}
        <Categories></Categories>
        <PopularProducts></PopularProducts>
      </div>
    </div>
  );
};

export default HomePage;
