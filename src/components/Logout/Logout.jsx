
import React, {useEffect, useState } from 'react'
import './logout.css'
import { BsArrowLeft } from "react-icons/bs";
const Logout = ({setLogout}) => {
    // let [data,setData]=useState("block")
    const backClick=()=>{
        setLogout("none");
    }
  return (
    <div>
    <div id='profile-box2'>
      <div className='profile-nav2'>
        <BsArrowLeft className='back-icon2'/><b>Logout</b>
          
        </div>  

        <div className='dialogueBox'>
            <div id='top1'>
                <p id='para5'>Are you sure to logout</p>
            </div>
            <div id='bottom1'>
                <button id='button1'  onClick={backClick} >Cancel</button><button id='button1'>Logout</button>
            </div>
        </div>     
    </div>



    </div>
  )
}

export default Logout
