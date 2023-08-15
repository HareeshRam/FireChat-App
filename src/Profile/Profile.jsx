import React, {useEffect, useState } from 'react'
import "./profile.css"
import { BsArrowLeft } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";

const Profile = ({setData}) => {
    const backClick=()=>{
        setData("none");

    }
    useEffect(()=>{
 
    },[])
  return (
    <div>
    <div id='profile-box'>
      <div className='profile-nav'>
        
        <BsArrowLeft className='back-icon' onClick={backClick}/><b>Profile</b>
          
        </div>
        <div className='profile-image'><div id='image'></div></div>
        <div className='box1'>
            <div className='top'><p id='para1'>Your name</p></div>
            <div className='bottom'><p className='para2' >Ram Charan</p><MdModeEdit id='edit1'/></div>
        </div>
        <div className='box2'>
            <p id='para3'>This is not your username or pin.This will be <br /> visible to your WhatsApp contacts</p>
        </div>
        <div className='box3'>
            <p id='para4'>About</p>
            <MdModeEdit id='edit'/>
        </div>

       
    </div>
    </div>
  )
}

export default Profile
