import React from "react";
import "./app.css";
import dataShoe from "./data";
import Shoes from "./components/Shoes";

const App = () => {
  return (
    <div className="shoe-shop">
      <h1 className="title">
        🎶Classo<small>-For Men</small>
      </h1>

      <Shoes shoesData={dataShoe} />
      <Watches />
      <Perfumes />
    </div>
  );
};

export default App;

const dataWatch = [
  {
    img: "https://rukminim1.flixcart.com/image/612/612/jw84ya80/watch/8/3/p/38044pp02-fastrack-original-imafgyqyn79hqtgy.jpeg?q=70",
    name: "Fastrack",
    price: "₹2050",
  },
  {
    img: "https://rukminim1.flixcart.com/image/612/612/kj4m0sw0-0/watch/y/p/x/new-trending-stylish-seven-friday-watch-nimit-sales-original-imafyrgnxbhtfugg.jpeg?q=70",
    name: "Seven-Friday",
    price: "₹1500",
  },
  {
    img: "https://rukminim1.flixcart.com/image/612/612/kactpjk0/watch/b/c/r/1650bm03-titan-original-imafry4ezncxya9z.jpeg?q=70",
    name: "Titan",
    price: "₹2550",
  },
  {
    img: "https://rukminim1.flixcart.com/image/612/612/kwmfqfk0/watch/b/7/q/1-ch2647-fossil-men-original-imag99865bjbzptn.jpeg?q=70",
    name: "Fossil",
    price: "₹3950",
  },
];

const dataPerfume = [
  {
    img: "https://rukminim1.flixcart.com/image/612/612/l1tmf0w0/perfume/w/i/a/-original-imagdb64hz2xygfa.jpeg?q=70",
    name: "Park-Avenue",
    price: "₹280",
  },
  {
    img: "https://rukminim1.flixcart.com/image/612/612/xif0q/perfume/p/0/f/-original-imaghbufgzkfbsfw.jpeg?q=70",
    name: "FOGG",
    price: "₹500",
  },
  {
    img: "https://rukminim1.flixcart.com/image/612/612/kz8qsnk0/perfume/3/k/u/100-action-perfume-for-men-and-woman-perfume-spray-with-minty-original-imagbavsdhsawdft.jpeg?q=70",
    name: "BREW",
    price: "₹550",
  },
  {
    img: "https://rukminim1.flixcart.com/image/612/612/xif0q/combo-kit/h/n/t/black-white-2-black-white-signature-original-imaggy8zja4mzzu5.jpeg?q=70",
    name: "Signature",
    price: "₹950",
  },
];

const Watch = ({ img, name, price }) => {
  return (
    <div>
      <img src={img} alt="img" />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

const Watches = () => {
  return (
    <div>
      <h2>⌚Watches</h2>
      <div className="collections">
        {dataWatch.map((watch, index) => {
          return (
            <Watch
              img={watch.img}
              name={watch.name}
              price={watch.price}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

const Perfume = ({ img, name, price }) => {
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

const Perfumes = () => {
  return (
    <div>
      <h2>🍾Perfumes</h2>
      <div className="collections">
        {dataPerfume.map((perfume, index) => {
          return (
            <Perfume
              img={perfume.img}
              name={perfume.name}
              price={perfume.price}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};
