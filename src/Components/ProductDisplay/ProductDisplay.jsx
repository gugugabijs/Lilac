import { useContext, useState } from "react";
import "./ProductDisplay.css";
import { AiOutlineHeart } from "react-icons/ai";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

const ProductDisplay = (props) => {
  const { product } = props;
  const [count, setCount] = useState(1);
  const { addToCart, addToFavorites } = useContext(ShopContext);
  const [successMessage, setSuccessMessage] = useState("");
  const handleAddToCart = () => {
    addToCart(props);
    setSuccessMessage("Successfully added!");
    setTimeout(() => setSuccessMessage(""), 1000);
  };

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <>
      <div className="product-display">
        <div className="product-display-left">
          <div className="product-display-img-list">
            <img src={product.imageUrl} alt="product-image" />
          </div>
          <div className="product-display-img">
            <img
              className="product-display-main-img"
              src={product.imageUrl}
              alt=""
            />
          </div>
        </div>
        <div className="product-display-right">
          <h1>{product.name}</h1>

          <div className="product-display-right-description">
            We would like kindly ask you to consider seasonality of flowers in
            this orders. Some flowers could be replaced with better options in
            the bouquet.
          </div>
          <div className="quantity">
            <button onClick={decreaseCount}>-</button>
            <span>{count}</span>
            <button onClick={increaseCount}>+</button>
          </div>
          <div className="product-display-right-prices">
            {product.price} AZN{" "}
          </div>
          <div
            className="cart-favourites"
            onClick={() => addToFavorites(product.id)}
          >
            <button
              className="cart-btn"
              onClick={() => {
                addToCart(product.id, count);
                handleAddToCart();
              }}
            >
              {" "}
              ADD TO CART
            </button>
            {successMessage && (
              <div className="successMessage">{successMessage}</div>
            )}
            <button className="heart-btn  product-heart">
              <AiOutlineHeart />
            </button>
          </div>
        </div>
      </div>
      <div className="product-display-bottom">
        <div className="product-display-bottom-items">
          <div className="product-display-bottom-about">
            <div className="product-display-bottom-text">
              <h1>About</h1>
            </div>
            <div className="product-display-bottom-info">
              <p>
                Lilac Flower Boutique appeared on Baku’s flower market at the
                beginning of 2012, and already won the hearts of all the people
                of Baku. Unique style, creativity florists and a wide range of
                flowers does left any client indifferent who once visited the
                flower boutique Lilac.
              </p>
              <p>
                Individual approach to every customer. So before to start
                bouquet or flower arrangement, Lilac florists detaily interested
                in tastes and the person's character whom floral gift is
                designing for.{" "}
              </p>
              <p>
                All flowers for bouquets, flower compositions and interior
                decoration are carely selected by specialists from Holland and
                sent to Azerbaijan. Thanks to this unique style Lilac so popular
                and recognizable in Baku. Because each bouquet is a small work
                of art.
              </p>
            </div>
          </div>
          <div className="product-display-bottom-delivery">
            <div className="product-display-bottom-text">
              <h1>Delivery</h1>
            </div>
            <div className="product-display-bottom-info">
              <p>
                Timely and high-quality delivery of flowers is one of our
                priorities because we know how important it is for you to please
                those who are dear to you, no matter how far away they are. The
                cost of such delivery can be found on the ordering page or from
                the administrators of our branches by +994 50 226 16 63 / +994
                50 226 16 67. Orders placed after 20:00 will be delivered to the
                recipient's address the next day.
              </p>
            </div>
            <div className="product-display-bottom-icon">
              <img />
            </div>
          </div>
          <div className="product-display-bottom-care">
            <div className="product-display-bottom-text">
              <h1>How to care flowers at home</h1>
            </div>
            <div className="product-display-bottom-info">
              <p>
                Here are some tips to help our flowers delight you for a long
                time: <br />
                /First of all, pour on cold water into the vase. <br />
                /If you have medicine for flowers, add the mixture to the water.
                <br />
                /Trim the flowers stems at an acute angle.
                <br />
                /The water in the vase should be changed every day, and the
                stems should be washed under running water and pruned regularly.
                <br />
                /Flowers should not be near heating devices, in a draft or in
                direct sunlight.
                <br />
                /Flower compositions with using a floral sponge should be
                watered once every two days to keep the sponge constantly moist.
              </p>
            </div>
            <div className="product-dusplay-bottom-icon">
              <img />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
