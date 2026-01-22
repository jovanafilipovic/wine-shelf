import "./Wines.css";
import WineList from "./WineList";
import "../global.css";
import FilterSection from "./FilterSection";

const Wines = () => {
  return (
    <div className="body-container">
      <div className="wines-page">
        <FilterSection />
        <WineList></WineList>
      </div>
    </div>
  );
};

export default Wines;
