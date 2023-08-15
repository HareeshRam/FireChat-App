
import React, {useEffect, useState } from 'react'
import './star.css'
import { BsArrowLeft } from "react-icons/bs";
import { CiMenuKebab} from "react-icons/ci";

const Starmessage = ({setStar}) => {
    const backClick=()=>{
        setStar("none");
    }
  return (
    <div>
    <div id='profile-box'>
      <div className='profile-nav'>
        <BsArrowLeft className='back-icon' onClick={backClick}/><b>Starred messages</b>
        <CiMenuKebab className='menuBar'/>
        </div>       
    </div>



    </div>
  )
}

export default Starmessage
