import React, {useEffect, useState } from 'react'
import './newgroup.css'
import Search from '../Seachbar/Search';
import { faker } from '@faker-js/faker';
import { BsArrowLeft } from "react-icons/bs";
const Newgroup = ({setNewgroup,sendClick}) => {
    const backClick=()=>{
        setNewgroup("none");
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
      <div id='profile-box'>
      <div className='profile-nav'>
        <BsArrowLeft className='back-icon' onClick={backClick}/><b>Add group partcipants</b>
          
        </div>  
        <div className='settings-search'>
            <Search/>
         </div> 
         <div id='chatScroll'>
        <ul type="none">
        {randomPersons.map((person, index) => (
          <li key={index} id='chatLi'onClick={sendClick} >
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

export default Newgroup
