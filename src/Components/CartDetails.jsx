import React from "react";
import "../Stylesheets/Cart.css";
import { useSelector } from "react-redux";
import { removeFromCart } from "../Redux/features/cartSlice";
import { useDispatch } from "react-redux";

const CartDetails = () => {
  const cart = useSelector((state) => state.allCart);
  console.log(cart.carts);

  let sum =0;
  cart.carts.forEach((elm)=>{
    sum+=elm.price*elm.qnty;
  });

  const Dispatch=useDispatch()

  const sendRemove=(ids)=>{
    Dispatch(removeFromCart(ids));
  }

  return (
    <>
      <div className="small-container cart-page">
        <table>
          <tbody>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
            {
              cart.carts.length!=0?cart.carts.map((data, index) => {
              return (
                <tr key={data.id}>
                  <td>
                    <div className="cart-info">
                      <img src={data.imgdata} alt="food-image" />
                      <div>
                        <p>{data.dish}</p>
                        <small>Price ₹{data.price}</small>
                        <br />
                        <p id="remove" onClick={()=>sendRemove(index)}>Remove</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <input type="number" defaultValue={data.qnty} />
                  </td>
                  <td>₹{data.qnty*data.price}</td>
                </tr>
              );
            }):<div style={{position:"absolute",left:"48%",top:"20%"}}>
              <h5>Cart Is Empty</h5>;
            </div>
            
            }
          </tbody>
        </table>
        <div className="total-price">
        {
          cart.carts.length!=0?<table>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>₹{sum}</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td>₹15.00</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>₹{sum+15}</td>
              </tr>
            </tbody>
          </table>:null
        }
          
        </div>
      </div>
    </>
  );
};

export default CartDetails;
