import React, {  useState } from 'react'
import './Navbar.css'
import Burger from '../burger/Burger'
import {FiInfo, FiLogIn} from 'react-icons/fi'
import {RiArrowDownSFill} from 'react-icons/ri'


export default function Navbar() {

  const [lang,setLang] = useState('Eng')
  const [curr,setCurr] = useState('USD')

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
        <p className='lang'>{lang}
          <RiArrowDownSFill className='arrow1'/>
          <div className='keep'></div>
          <div className='lcard'>
            <h1>Select a currency</h1>
            <ul>
              <li onClick={()=>setLang('Eng')} className={lang === 'Eng' ? 'selected' : ''}><img src="eng.svg" alt="" /><p>English</p></li>
              <li onClick={()=>setLang('Ger')} className={lang === 'Ger' ? 'selected' : ''}><img src="ger.svg" alt="" /> <p>German</p></li>
              <li onClick={()=>setLang('Chi')} className={lang === 'Chi' ? 'selected' : ''}><img src="chi.svg" alt="" /><p>Chinese</p></li>
              <li onClick={()=>setLang('Ita')} className={lang === 'Ita' ? 'selected' : ''}><img src="ita.svg" alt="" /><p>Italian</p></li>
              <li onClick={()=>setLang('Tr')} className={lang === 'Tr' ? 'selected' : ''}><img src="tra.svg" alt="" /><p>Trash</p></li>
            </ul>
          </div>
        </p>
        <p className='curr'>{curr}
          <RiArrowDownSFill className='arrow1'/>
          <div className='keep'></div>
          <div className='ccard'>
            <h1>Select a currency</h1>
            <ul>
              <li onClick={()=>setCurr('USD')} className={curr === 'USD' ? 'selected' : ''}><p>USD</p></li>
              <li onClick={()=>setCurr('EUR')}  className={curr === 'EUR' ? 'selected' : ''}><p>EUR</p></li>
              <li onClick={()=>setCurr('UAH')}  className={curr === 'UAH' ? 'selected' : ''}><p>UAH</p></li>
              <li onClick={()=>setCurr('GBP')}  className={curr === 'GBP' ? 'selected' : ''}><p>GBP</p></li>
              <li onClick={()=>setCurr('SSD')}  className={curr === 'SSD' ? 'selected' : ''}><p>SSD</p></li>
            </ul>
          </div>
          </p>
        <svg className='line'></svg>
        <FiInfo  className='info'/>
        <svg className='line'></svg>
        <button className='button'>Log In <FiLogIn className='logicon' /></button>
      </div>
      <Burger/>
    </nav>
  )
}