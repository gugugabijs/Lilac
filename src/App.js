
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MainPage from './Pages/MainPage'
import Categories from './Pages/Categories'
import Cart from'./Pages/Cart'
import Login from './Pages/Login'
import Product from './Pages/Product/Product';
import OurBoutiques from './Pages/OurBoutiques';
import Footer from './Components/Footer/Footer';
import Favorites from './Pages/Favorites';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/bouqet-Week' element={<Categories category='B-week'/>}/>
        <Route path='/bouqets' element={<Categories  category='Bouqet'/>}/>
        <Route path='/compositions' element={<Categories  category='Composition'/>}/>
        <Route path='/plants' element={<Categories  category='Plant'/>}/>
        <Route path='/present' element={<Categories  category='Present'/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/boutiques' element={<OurBoutiques/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
