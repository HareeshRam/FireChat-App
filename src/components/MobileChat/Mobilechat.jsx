import React, {useEffect, useState } from 'react'
import './mobilechat.css'
import { BsArrowLeft } from "react-icons/bs";
import { BsFillSendFill } from "react-icons/bs";
const Mobilechat = ({setSendmessage}) => {
        // let [data,setData]=useState("block")
        const backClick=()=>{
            setSendmessage("none")
        }
       
  return (
    <div>
    <div id='mobileprofile-box'>
      <div className='profile-nav'>
        
        <BsArrowLeft className='back-icon' onClick={backClick}/><b>Ram Charan</b>
          
        </div> 
        <div className='mobilechatmiddle'>
         </div>
         <div className='mobileSearch'>
         
             <div className='sendDiv'>
             <input className='mobileInput' type="text" placeholder='Send Message' />
               <BsFillSendFill id='sendButton'/>
             </div>
            
        </div>      
    </div>

    </div>
  )
}

export default Mobilechat
