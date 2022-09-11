import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import Slider from "./Slider";
import Categories from "./Categories";
import PopularProducts from "./PopularProducts";

// const users = useSelector((state) => state.users);

const HomePage = () => {
  return (
    <div className="homepage">
      {/*   {users.map((user) => (
        <div key={user.id}>
          {user.firstName}
          {user.lastName}
          {user.email}
        </div>
      ))}
   */}

      <div className="products-area">
        <Slider></Slider>
        <Categories></Categories>
        <PopularProducts></PopularProducts>
      </div>
    </div>
  );
};

export default HomePage;
