import React from "react";
import "./Wines.css";
import WineList from "./WineList";
import WinesHeader from "./WinesHeader";

const Wines = () => {
  return (
    <div className="wines-page">
      <WinesHeader></WinesHeader>
      <WineList></WineList>
    </div>
  );
};

export default Wines;
