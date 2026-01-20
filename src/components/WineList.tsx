import { popularProducts } from "../data";
import ProductItem from "./ProductItem";
import "./Wines.css";

const WineList = () => {
  return (
    <div className="wines-container">
      {popularProducts.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default WineList;
