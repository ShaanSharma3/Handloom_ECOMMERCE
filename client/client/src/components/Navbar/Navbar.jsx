import React, { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from '../Cart/Cart';
import { useSelector } from "react-redux";



const Navbar = () => {
    const [open,setOpen] = useState(false)
    const products = useSelector((state) => state.cart.products);
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                    <img src="https://th.bing.com/th/id/OIP.2pUCHErkZ6-Bxcn6AyOk-wHaE8?w=279&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7"alt="" />
                       
                    </div>

                    <div className="item">
                        <span>INDIA</span>
                       
                    </div>

                    <div className="item">
                        <Link className="link" to="/products/1">Women</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/2">Men</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/3">Children</Link>
                    </div>
                </div>








                <div className="center">
                    <Link className="link" to="/">  HIMACHAL HANDLOOM</Link>
                </div>




                <div className="right">
                    <div className="item">
                        <Link className="link" to="/">Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">About</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Stores</Link>
                    </div>

                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineOutlinedIcon />
                        <FavoriteBorderOutlinedIcon />

                        <div className="cartIcon" onClick={()=>setOpen(!open)}>
                            <ShoppingCartOutlinedIcon />
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>



            </div>
            {open && <Cart/>}  
        </div>
    );
};
export default Navbar