import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {useDispatch, useSelector} from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";

const Cart = () =>{
  const handleCheckoutClick = () => {
    // Redirect to the desired URL
    window.location.href = 'https://buy.stripe.com/test_aEU3fOgtDbdh7raeUV';
  };
const products = useSelector(state=>state.cart.products);
const dispatch = useDispatch();
const totalPrice = ()=>{
  let total = 0;
  products.forEach((item) =>(total += item.quantity * item.price));
  return total.toFixed(2);
}
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ₹{item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>₹{totalPrice()}</span>
      </div>
      <button onClick={handleCheckoutClick} >PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;