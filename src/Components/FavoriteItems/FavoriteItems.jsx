import React, { useContext } from 'react';
import "./FavoriteItems.css";
import { ShopContext } from '../../Context/ShopContext';

import Item from '../Item/Item';

const FavoriteItems = () => {
    const {all_product, addToFavorites ,favorites}= useContext(ShopContext);
    console.log(favorites);
  return (
    <div className='favoriteItems'>
      {all_product.map((e) => {
        if (favorites.some(favorite => favorite.id === e.id)) {
          return (
            <div key={e.id} >
                
              <Item id={e.id} name={e.name} imageUrl={e.imageUrl} price={e.price}  />
              
            </div>
          );
        }
        
        return null;
      })}
    </div>
  );
};

export default FavoriteItems
