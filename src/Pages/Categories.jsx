import React, { useContext } from 'react';
import './CSS/Categories.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const Categories = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='category'>
      <img  className='category-image' src={props.imageUrl} alt="" />
      <div className="categort-indexSort">
        
      </div>
      <div className="category-product">
        {all_product.map((item,i)=>{
          if (props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} imageUrl={item.imageUrl} price={item.price}/>
          }
          else{
            return null;
          
          }
        })}
      </div>
      
    </div>
  )
}

export default Categories
