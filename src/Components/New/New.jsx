import React from 'react';
import './New.css';
import Item from '../Item/Item';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import new_data from '../Assets/new'

const New = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='new'>
      <h1 className='text'> NEW</h1>
      <div className="new-item">
      <Carousel  responsive={responsive}  infinite={true}>
        {new_data.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} imageUrl={item.imageUrl} price={item.price}/>
        })}
</Carousel>
      </div>
    </div>
  )
}

export default New
