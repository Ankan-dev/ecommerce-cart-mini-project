import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Stylesheets/Home.css";
import Cardsdata from "./CardData";
import { addToCart } from "../Redux/features/cartSlice";
import { useDispatch } from "react-redux";

export const Home = () => {

  const Dispatch=useDispatch();

  const sendData=(data)=>{
    Dispatch(addToCart(data))
  }
  return (
    <div style={{marginTop:"10vh"}}>
      <section>
        <h2 className="main-heading">Welcome to Our Resturant</h2>
        <div className="items-container">
          {Cardsdata.map((elm, index) => {
            return (
              <Card key={elm.id} style={{ width: "25rem",height:"25rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center" ,  boxShadow: "5px 5px 5px black"}}>
                <Card.Img variant="top" src={elm.imgdata}  style={{width:"90%",height:"50%",marginTop:"20px"}}/>
                <Card.Body>
                  <Card.Title>
                    <h5>{elm.dish}</h5>
                    <h6 id="rating">{elm.rating} ★</h6>
                  </Card.Title>
                  <div className="card-text">
                    <h6>{elm.address}</h6>
                    <h5 style={{marginLeft:"10px"}}>₹{elm.price}</h5>
                  </div>
                  <div id="button-container">
                    <Button variant="danger" onClick={()=>sendData(elm)}>Add To Cart</Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
};
