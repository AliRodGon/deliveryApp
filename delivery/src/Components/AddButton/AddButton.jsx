import React, {useEffect, useState, Fragment} from 'react';
import Card from '../Card/Card';
import "./AddButton.css"



const AddButton = () => {
  const [dishesList, setDishesList]=useState([]);

  useEffect(()=>{

    const url = "http://localhost:5000/api/dishes/"
    const fetchAllDishes = async () => {
      const response = await fetch(url)
  
        const json = await response.json()
        setDishesList(json)
        console.log(json)               
      };
      fetchAllDishes()
      console.log(dishesList)
  }, [])
  
  return (
    <div className='addButton'>
    {dishesList.map(item => (
      <div key={item._id}>
        <Card price={item.price} name={item.dishname} category={item.category} id={item._id} img={item.img}/>   
      </div>
    ))}
  </div>
  )
};

export default AddButton;
