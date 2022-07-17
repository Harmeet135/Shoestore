import "./addtocart.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/action";
import React, { useEffect } from "react";
import { productList } from "../../redux/productAction";
import { useSelector } from "react-redux";
import uni from "../../assests/unisex.svg";
import { Link } from "react-router-dom";
import Aside from "../../components/aside/Aside";

const Addtocart = () => {
  const data = useSelector((state) => state);
  console.log("products", data.productData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div id="addtocart-info">
      <div className="products">
        {data.productData.map((item) => {
          if (item.id % 2 === 0 || item.id === 0) {
            return (
              <div key={item.id} className="product-item-even">
                <img className="porduct-img" src={item.photo} alt="" />
                <img className="product-gender" src={uni} alt="" />
                <div className="pro-info">
                  <div className="product-size"> {item.size} </div>
                  <div className="product-name"> {item.name} </div>
                  <div className="product-price">{item.price} $</div>

                  <button onClick={() => dispatch(addToCart(item))}>
                    ADD to Cart
                  </button>
                </div>
              </div>
            );
          } else {
            return (
              <div key={item.id} className="product-item-odd">
                <img className="porduct-img" src={item.photo} alt="" />
                <img className="product-gender" src={uni} alt="" />
                <div className="pro-info">
                  <div className="product-size"> {item.size} </div>
                  <div className="product-name"> {item.name} </div>
                  <div className="product-price">{item.price} $</div>

                  <button onClick={() => dispatch(addToCart(item))}>
                    ADD to Cart
                  </button>
                </div>
              </div>
            );
          }
        })}
      </div>

      <Aside />
    </div>
  );
};

export default Addtocart;
