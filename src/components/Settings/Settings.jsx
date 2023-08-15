import React, {useEffect, useState } from 'react'
import './settings.css'
import { BsArrowLeft } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
import { MdOutlineWallpaper } from "react-icons/md";
import { BiSolidDownload } from "react-icons/bi";
import { MdPermDeviceInformation } from "react-icons/md";
import { BiSolidHelpCircle } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";



import Search from '../Seachbar/Search';
const Settings = ({setSetting}) => {
    const backClick=()=>{
        setSetting("none");
    }
  return (
    <div>
     <div id='chat-box'>
     <div className='profile-nav'>
        
        <BsArrowLeft className='back-icon' onClick={backClick}/><b>Settings</b>
          
        </div>       



        <div id='scrolling'>
        <div className='settings-search'>
            <Search/>
        </div>
        <div className='settings-profile'>
           <div className='settings-Image'></div>
           <div className='name'>
            <p>Ram Charan</p>
           </div>
        </div>
        <div>
            <ul id='a'>
            <li id='b'><IoMdNotifications id='iconsMove'/> <span>Notifications</span></li>
            <li id='b'> <RiGitRepositoryPrivateFill id='iconsMove'/><span>Privacy</span></li>
            <li id='b'> <MdSecurity id='iconsMove'/> <span>Security</span></li>
            <li id='b'> <svg id='svg3' viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1"><path d="M12,1 L15.219275,4.21927498 L19.780725,4.21927498 L19.780725,8.78072502 L23,12 L19.780725,15.219275 L19.780725,19.780725 L15.219275,19.780725 L12,23 L8.78072502,19.780725 L4.21927498,19.780725 L4.21927498,15.219275 L1,12 L4.21927498,8.78072502 L4.21927498,4.21927498 L8.78072502,4.21927498 L12,1 Z M12,6 L12,18 C15.31,18 18,15.31 18,12 C18,8.76522727 15.4308833,6.12259298 12.2246968,6.00414409 L12,6 Z" fill="currentColor" fill-rule="nonzero"></path></svg>  <span>Theme</span></li>
            <li id='b'> <MdOutlineWallpaper id='iconsMove'/> <span>Chat wallpaper</span></li>
            <li id='b'><BiSolidDownload id='iconsMove'/> <span>Media auto-download</span></li>
            <li id='b'> <MdPermDeviceInformation id='iconsMove'/> <span>Request account info</span></li>
            <li id='b'><svg id='svg3' viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1"><path fill="currentColor" d="M 10.851562 12.648438 L 13.148438 12.648438 L 12 9 Z M 20 8.691406 L 20 6 C 20 4.898438 19.101562 4 18 4 L 15.308594 4 L 13.410156 2.101562 C 12.628906 1.320312 11.359375 1.320312 10.582031 2.101562 L 8.691406 4 L 6 4 C 4.898438 4 4 4.898438 4 6 L 4 8.691406 L 2.101562 10.589844 C 1.320312 11.371094 1.320312 12.640625 2.101562 13.421875 L 4 15.320312 L 4 18 C 4 19.101562 4.898438 20 6 20 L 8.691406 20 L 10.589844 21.898438 C 11.371094 22.679688 12.640625 22.679688 13.421875 21.898438 L 15.320312 20 L 18 20 C 19.101562 20 20 19.101562 20 18 L 20 15.308594 L 21.898438 13.410156 C 22.679688 12.628906 22.679688 11.359375 21.898438 10.578125 Z M 14.089844 15.398438 L 13.601562 14 L 10.398438 14 L 9.910156 15.398438 C 9.78125 15.761719 9.449219 16 9.070312 16 C 8.449219 16 8.019531 15.390625 8.230469 14.808594 L 10.671875 7.949219 C 10.871094 7.378906 11.398438 7 12 7 C 12.601562 7 13.128906 7.378906 13.339844 7.941406 L 15.78125 14.800781 C 15.988281 15.378906 15.558594 15.988281 14.941406 15.988281 C 14.550781 16 14.21875 15.761719 14.089844 15.398438 Z M 14.089844 15.398438 "></path></svg> <span>Keyboard shortcuts</span> </li>
            <li id='b'> <BiSolidHelpCircle id='iconsMove'/>  <span>Help</span></li>
            <li id='b' className='c'> <IoLogOutOutline id='iconsMove'/><span id='log'>Log out</span></li>
            </ul>
        </div>
      

       
    </div>
    </div>
    </div>
  )
}

export default Settings
