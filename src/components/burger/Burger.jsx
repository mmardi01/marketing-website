
import {PiListBold} from 'react-icons/pi'
import {HiMiniXMark} from 'react-icons/hi2'
import React, { useState } from 'react'
import {FiLogIn} from 'react-icons/fi'
import {RiArrowDownSFill} from 'react-icons/ri'
import './Burger.css'

export default function Burger() {
  const [slide,setSlide] = useState('')
  return (
    <>
        <div className='burger' onClick={() => setSlide('slide')}>
            <PiListBold  />
        </div>
          <div className={`side ${slide}`}>
            <div className='top'>
              <HiMiniXMark onClick={() => setSlide('')} className='xicon' />
              <FiLogIn  className='licon' />
            </div>
            <ul className='sidelist'>
              <li><p>Cooking Classes</p></li>
              <li><p>Become a Chef</p></li>
              <li><p>Group Cooking</p></li>
              <li><p>Support</p></li>
              <li><p>English</p><RiArrowDownSFill className='arrow'/></li>
              <li><p>Currency</p><RiArrowDownSFill className='arrow'/></li>
            </ul>
          </div>
    </>
  )
}
