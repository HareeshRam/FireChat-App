import React from 'react'
import './search.css'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiBars3BottomRight } from "react-icons/hi2";
const Search = () => {
  return (
    <div>  
      <div id='main-search'>
      <div className='search1'>
     <FaMagnifyingGlass className='bar1'/>
     <input className='input1' type="text" placeholder='Seach or start new chat' />
      </div>
      <HiBars3BottomRight  className='bar2'/>
      </div>

    </div>
  )
}

export default Search
