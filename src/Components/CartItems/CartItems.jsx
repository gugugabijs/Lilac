import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const {
    getTotalCartAmount,
    all_product,
    cartItems,
    removeFromCart,
    removeAllFromCart,
  } = useContext(ShopContext);
  console.log("card items", cartItems);

  return (
    <div className="cart-container">
      <div className="cartItems">
        <div className="cartitems-format-main"></div>
        <hr />
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="cartitems-format cartitems-format-main">
                  <img
                    src={e.imageUrl}
                    alt=""
                    className="carticon-product-icon"
                  />
                  <p>{e.name}</p>
                  {/* <button onClick={decreaseCount}>-</button> */}
                  <button className="cartitems-quantity">
                    {cartItems[e.id]}
                  </button>
                  {/* <button onClick={increaseCount}>+</button> */}

                  <p>${e.price * cartItems[e.id]}</p>
                  <img
                    className="cartietms-remove-icon"
                    src={remove_icon}
                    onClick={() => {
                      removeAllFromCart(e.id);
                    }}
                    alt=""
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
