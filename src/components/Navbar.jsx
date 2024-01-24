import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../styles/Navbar.css";
import Cart from "../pages/Cart";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  const handleAddToCart = () => {
    // Implement your logic to add items to the shopping cart
    console.log("Added items to the shopping cart");
    
    // Open the cart
    setIsCartOpen(true);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Logo" />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">{<ShoppingCartIcon onClick={handleAddToCart} style={{ color: 'white' }} />}</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
      {/* Render the Cart component conditionally */}
      {/* {isCartOpen && <Cart />} */}
    </div>
  );
}

export default Navbar;
