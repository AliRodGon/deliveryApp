import React, {useEffect, useState, Fragment} from 'react';
import "./Card.css"
import AddButton from '../AddButton/AddButton';


const Card = (props)=> {
  const [totalPrice,setTotalPrice] = useState(props.price)
  
  const [numberOfPortions, setNumberOfPortions] = useState(0)

  console.log(numberOfPortions)
  const addOnePortion = ()=> {
    setNumberOfPortions (numberOfPortions+1)
    setTotalPrice (totalPrice+props.price)
    console.log("hello  "+ totalPrice)
    console.log(numberOfPortions)
  }

  const removeOnePortion =()=> {
    if (numberOfPortions>0) {
      setTotalPrice (totalPrice-props.price)
      setNumberOfPortions (numberOfPortions-1)
      console.log("goodbay " + totalPrice)
      console.log(numberOfPortions)
    } 
  }

  return (  
    <div className='individualCard'>
      <div id="bodyCard">
          <div className='dishImg'>
            <img src={props.img} alt="dish image" />
          </div>
          <div className='dishTexts'>
            <h5>{props.name}</h5>
            <p>{props.price} €</p>
            <p>{props.category}</p>
            <button id="addPortion" onClick={
              (addOnePortion)
             }>Añadir</button>
            <button id="removePortion" onClick={(removeOnePortion)}>Quitar</button>
            <p>
              Raciones pedidas: {numberOfPortions}
            </p>
            <p>{totalPrice-props.price}</p>
          </div>
      </div>
    </div> 
  )
}
export default Card