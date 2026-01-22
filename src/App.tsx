import Footer from "./components/common/Footer";
import Header from "./components/common/NavigationMenu";
import HomePage from "./components/HomePage";
import Wines from "./components/Wines";
import SparklingWines from "./components/SparklingWines";
import Regions from "./components/Regions";
import Grapes from "./components/Grapes";
import ShoppingBag from "./components/ShoppingBag";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import TermsOfUse from "./components/TermsOfUse";
import PageNotFound from "./components/PageNotFound";
import Registration from "./components/Registration";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import ProductDescription from "./components/ProductDescription";
import GiftBoxes from "./components/GiftBoxes";
import Blog from "./components/Blog";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/wines" element={<Wines />} />
        <Route path="/champagnes" element={<SparklingWines />} />
        <Route path="/regions" element={<Regions />} />
        <Route path="/grapes" element={<Grapes />} />
        <Route path="/giftBoxes" element={<GiftBoxes />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shoppingBag" element={<ShoppingBag />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/termsOfUse" element={<TermsOfUse />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/productDescription" element={<ProductDescription />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
