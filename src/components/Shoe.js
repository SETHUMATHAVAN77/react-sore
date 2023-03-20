import React from "react";

const Shoe = ({ img, name, price }) => {
  // console.log(props.book);
  // const { img, name, price } = props.shoe;
  return (
    <div>
      <article>
        <img src={img} alt="img" />
        <h3>{name}</h3>
        <p>{price}</p>
      </article>
    </div>
  );
};

export default Shoe;
