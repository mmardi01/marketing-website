import React, { useState } from 'react'
import './Navbar.css'
import Burger from '../burger/Burger'
export default function Navbar() {

  const {lang,setLang} = useState('Eng')
  const {curr,setCurr} = useState('USD')

  return (
    <nav>
      <div className='left'>
        <h1 className='logo'>COOK</h1>
        <svg className='line'></svg>
        <ul className='navlist'> 
          <li><img className='icon' src='image 3.svg' /><p>Cooking Classes</p></li>
          <li><img className='icon' src='image1.svg' /><p>Become a Chef</p></li>
          <li><img className='icon' src='image 4.svg' /><p>Group Cooking</p></li>
        </ul>
      </div>
      <div className='right'>
        <p>{lang}</p>
        <p>{curr}</p>
      </div>
      <Burger/>
    </nav>
  )
}