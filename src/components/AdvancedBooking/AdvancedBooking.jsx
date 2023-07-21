import React from 'react'
import './AdvancedBooking.css'
import BookingInfo from './BookingInfo'
import { infoItems } from '../../constants'
const AdvancedBooking = () => {
  return (
    <div
      className='advanced_booking'
      style={{ backgroundImage: 'url("./page3bg.png")' }}
    >
      <div className='header_bar' />
      <p className='text_head'>advanced booking</p>
      <div className='search_container'>
        <input
          type='text'
          className='search_input'
          placeholder='search restaurant'
        />
        <button className='go_btn_2'>GO</button>
      </div>
      <div className='info_flex'>
        {infoItems.map( ( item, i ) => {
          return <BookingInfo key={i} {...item} />
        })}
      </div>
    </div>
  )
}

export default AdvancedBooking