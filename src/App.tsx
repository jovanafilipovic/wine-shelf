import React from "react";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import HomePage from "./components/HomePage";
import Wines from "./components/Wines";
import SparklingWines from "./components/SparklingWines";
import Regions from "./components/Regions";
import Grapes from "./components/Grapes";
import Gifts from "./components/Gifts";
import ShoppingBag from "./components/ShoppingBag";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import TermsOfUse from "./components/TermsOfUse";
import PageNotFound from "./components/PageNotFound";
import Registration from "./components/Registration";
import { Route, Routes } from "react-router-dom";
import Favorites from "./components/Favorites";
import SignIn from "./components/SignIn";
import ProductDescription from "./components/ProductDescription";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wines" element={<Wines />} />
        <Route path="/champagnes" element={<SparklingWines />} />
        <Route path="/regions" element={<Regions />} />
        <Route path="/grapes" element={<Grapes />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/shoppingBag" element={<ShoppingBag />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/termsOfUse" element={<TermsOfUse />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/productDescription" element={<ProductDescription />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
