import { giftBoxes } from "../data";
import ProductItem from "./ProductItem";

const GiftBoxes = () => {
  return (
    <div>
      {giftBoxes.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default GiftBoxes;
