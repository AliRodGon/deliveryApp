import React from "react";
import Card from "../Card/Card";
import AddButton from "../AddButton/AddButton";

const Cards = (props) => {




  return <div>
     <AddButton/> 
    
    <button>Hey, I'm a button {props.totalPrice}</button> 
   
  </div>;
};

export default Cards;
