import "./cart.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removefromCart } from "../../redux/action";
import { productList } from "../../redux/productAction";

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productList());
  }, []);
  const cartData = useSelector((state) => state.cartData);
  const [sideBar, setsideBar] = useState(false);
  const showSidebar = () => setsideBar(!sideBar);

  let amoount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);

  const count = useSelector((state) => state.cartData);
  console.log("redux data", count);
  return (
    <>
      <div className="sidebar">
        <div onClick={showSidebar} id="cart">
          CART
          <span id="span"> {count.length}</span>
        </div>
      </div>
      <div className={sideBar ? "side-menu active" : "side-menu"}>
        <h1 id="carttt">YOUR CART</h1>

        {cartData.map((item) => (
          <div id="cart-info">
            <img id="cart-img" src={item.photo} alt="" />
            <div className="cart-info">
              <div className="product-namee"> {item.name} </div>
              <div className="product-pricee">{item.price} $</div>

              <div className="product-sizee">SIZE : {item.size} </div>
            </div>
            <button
              id="cart-button"
              onClick={() => dispatch(removefromCart(item.id))}
            >
              Remove
            </button>
          </div>
        ))}
        <div className="amount">Subtotal: {amoount}</div>
      </div>
    </>
  );
};

export default Cart;
