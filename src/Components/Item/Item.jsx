
import { useContext, useState, } from 'react';
import './Item.css'
import {AiOutlineHeart} from "react-icons/ai"
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';


function Item(props) {
 
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  const {addToCart,addToFavorites}= useContext(ShopContext);
  const [successMessage, setSuccessMessage] = useState('');
  const handleAddToCart = () => {
      addToCart(props);
      setSuccessMessage('Successfully added!');
      // Clear the success message after a few seconds (optional)
      setTimeout(() => setSuccessMessage(''), 1000);
    };


  
  

  return <>
  <section className="card-container">
    <section className="card">
      <Link to={`/product/${props.id}`}><img onClick={handleClick} src={props.imageUrl} className="card-img" /></Link>
      <div className="card-items">
      <div className="card-details">
        <h3 className="card-title">{props.name}</h3>
        <section className="card-price">
            <span>{props.price} AZN</span>
            

          </section>
      </div>
      <div className="cart">
        
       <a href="#"> <button type="submit" className="btn-primary" onClick={()=>{addToCart(props.id,1);  handleAddToCart ();}} >Add to Cart</button>{successMessage && <div className='successMessage'>{successMessage}</div>}</a>
       <span><button className="heart-btn" onClick={()=>addToFavorites(props.id)} ><AiOutlineHeart/></button></span>
      </div></div>
    </section>

  </section>
  
  </>
}
export default Item;


