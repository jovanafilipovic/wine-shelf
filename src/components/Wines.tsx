import "./Wines.css";
import WineList from "./WineList";
import WinesHeader from "./WinesHeader";
import "../global.css";

const Wines = () => {
  return (
    <div className="body-container">
      <div className="wines-page">
        <WinesHeader></WinesHeader>
        <WineList></WineList>
      </div>
    </div>
  );
};

export default Wines;
