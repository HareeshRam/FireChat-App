
import React, {useEffect, useState } from 'react'
import './selectchat.css'
import { BsArrowLeft } from "react-icons/bs";
import { faker } from '@faker-js/faker';

const Selectchat = ({setSelectchat,sendClick}) => {
    // let [data,setData]=useState("block")
    const backClick=()=>{
        setSelectchat("none");
    }

    const randomNames = [];
    for (let i = 0; i < 30; i++) {
      const randomName = faker.person.fullName();
      randomNames.push(randomName);
    }
    
    const generateRandomPerson = () => {
      const imageUrl = faker.image.avatar();
      const name = randomNames.pop(); // Get the last name from the randomNames array and remove it from the array
      return { imageUrl, name };
    };
    
    const randomPersons = Array.from({ length: 30 }, generateRandomPerson);
    
    console.log("random",randomNames);
  return (
    <div>
    <div id='profile-box1'>
      <div className='profile-nav1'>
        <BsArrowLeft className='back-icon1' onClick={backClick}/><b id='b1'>0 Slected</b>
          
        </div>  
      
        <div id='chatScroll'>
        <ul type="none">
        {randomPersons.map((person, index) => (
          <li key={index} id='chatLi'onClick={sendClick} >
            <input type="checkbox" className='checkbox' />
            <img id='chatImage' src={person.imageUrl} alt={`Person ${index + 1}`} />
            <span>{person.name}</span>
            
          </li>
              
        ))}
      </ul>
        </div>       

    </div>



    </div>
  )
}

export default Selectchat
