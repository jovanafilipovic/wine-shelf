import { popularProducts } from "../data";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <div className="popular-products">
      {popularProducts.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
