import React from 'react'
import './Topbar.css'
import { topbarMenu } from '../../constants'
import { BsCaretDownFill } from 'react-icons/bs'

const Topbar = () => {


  return (
    <div className='topbar'>
      <div className='topbar_left'>
        <img src='./logo.png' alt='logo' />
        <nav className='menu'>
          {topbarMenu.map( ( menuItem, i ) => {
            return <button key={i} className='nav_items'>{menuItem}</button>
          })}
        </nav>
      </div>
      <div className='topbar_right'>
        <div class='avatar_with_badge'>
          <img src='./avatar.jpeg' alt='avatar' className='menu_avatar' />
          <div/>
        </div>
        <button className='profile_select'>
          User
          <BsCaretDownFill style={{width:'10px', color:'#ffffff'}} />
        </button>
      </div>
    </div>
  )
}

export default Topbar
