import React from 'react'
import CarouselOne from '../Components/CarouselOne/CarouselOne'
import Bestseller from '../Components/Bestseller/Bestseller'
import HomeLinks from '../Components/HomeLinks/HomeLinks'
import New from '../Components/New/New'
import Boutiques from '../Components/Boutiques/Boutiques'

const MainPage = () => {
  return (
    <div>
      <CarouselOne/>
      <Bestseller/>
      <HomeLinks/>
      <New/>
      <Boutiques/>
    </div>
  )
}

export default MainPage
