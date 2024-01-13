import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import { RiSearchLine } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import "reactjs-popup/dist/index.css";
import Login from "../../Pages/Login";
import Modal from 'react-modal';
import { ShopContext } from "../../Context/ShopContext";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor:'linear-gradient(0deg,#6a5597,#6a5597),#6a5597',
  }
};

const Navbar = () => {

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const {getTotalCartItems,getTotalFavItems }= useContext(ShopContext);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div className="navbar">
      <div className="nav-logo">
        <a href="/">
          {" "}
          <img src={logo} alt="logo" />
        </a>
      </div>
      <ul className="nav-menu">
        <li>
          {" "}
          <Link style={{ textDecoration: "none" }} to="/bouqet-Week">
            BOUQET OF THE WEEK
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/bouqets">
            BOUQUETS
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/compositions">
            СOMPOSİTİONS
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/plants">
            PLANTS
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="present">
            PRESENT
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <RiSearchLine />
        <FaRegUser  onClick={openModal}/>
        <Link style={{ textDecoration: "none" }} to="/favorites">
        <FaRegHeart /> </Link>
        {getTotalFavItems() > 0 && (
        <div className="nav-cart-count">{getTotalFavItems () }</div>)}
        <Link style={{ textDecoration: "none" }} to="/cart">
          <SlHandbag />
        </Link>
        {getTotalCartItems()> 0 &&(<div className="nav-cart-count">{getTotalCartItems()}</div>)}
        
      </div>

      
      
      <Modal 
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Gugu's Modal">
        <button  className="x-btn"  onClick={closeModal}><IoMdCloseCircle /></button>
        <Login/>
      </Modal>

    </div>
  );
};
export default Navbar;
