import React from 'react'
import './AdvancedBooking.css'
import { AiFillCaretDown } from 'react-icons/ai'


const BookingInfo = ({headName, subInfo}) => {
  return (
    <div>
      <div className='info_head'>
        <p>{headName}</p>
        <AiFillCaretDown style={{color:'red', fontSize:'7px'}} />
      </div>
      <p className='subInfo'>{subInfo}</p>
    </div>
  )
}

export default BookingInfo