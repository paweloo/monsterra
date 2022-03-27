import React, { useState, useEffect } from "react";
import "./App.css";
import ProductContainer from "./components/ProductContainer";
import ProductDetails from "./components/productDetails";
import { TweenMax } from "gsap/all";
import { Transition } from "react-transition-group";

function App() {
  const [data, setData] = useState([]);
  const [currItem, setCurrItem] = useState([]);
  const [detailsVisibility, setDetailsVisibility] = useState(false);
  const [itemBought, setItemBought] = useState(false);
  const getData = () => {
    fetch("https://my-json-server.typicode.com/wrongakram/demo/products")
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleClick = (e, d) => {
    setCurrItem(d);
    setDetailsVisibility(!detailsVisibility);
  };

  return (
    <div className="App">
      <h1 className="pickH1">Wybierz produkt</h1>
      <div className="container">
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <ProductContainer
              onClick={(e) => handleClick(e, item)}
              className="containerInner"
              name={item.name}
              image={item.image}
            />
          ))}
      </div>
      <Transition
        timeout={1000}
        mountOnEnter
        unmountOnExit
        in={detailsVisibility}
        addEndListener={(node, done) => {
          TweenMax.from(node, 0.6, {
            x: detailsVisibility ? 1000 : 0,
            ease: "Power1.easeOut",
            onComplete: done,
          });
          TweenMax.to(node, 0.6, {
            x: detailsVisibility ? 0 : 1000,
            ease: "Power1.easeOut",
            onComplete: done,
          });
        }}
      >
        <ProductDetails
          back={() => {
            setDetailsVisibility(!detailsVisibility);
            setItemBought(false);
          }}
          name={currItem.name}
          details={currItem.details}
          price={currItem.price}
          image={currItem.image}
          buy={() => setItemBought(true)}
          isBought={itemBought}
        />
      </Transition>
      )
    </div>
  );
}

export default App;
