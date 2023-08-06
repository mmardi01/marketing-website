import React from 'react'
import './Navbar.css'
import {PiListBold} from 'react-icons/pi'


export default function Navbar() {
  return (
    <nav>
        <h1 className='logo'>COOK</h1>
        <div className='burger'>
            <PiListBold  />
        </div>
    </nav>
  )
}
