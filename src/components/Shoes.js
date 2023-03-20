import React from "react";
import Shoe from "./Shoe";

const Shoes = ({ shoesData }) => {
  return (
    <div>
      <h2>👟Shoes</h2>
      <div className="collections">
        {shoesData.map((shoe, index) => {
          return <Shoe {...shoe} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Shoes;
