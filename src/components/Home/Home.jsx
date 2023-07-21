import React from 'react'
import './Home.css'
import { FaLocationDot } from 'react-icons/fa6'

const Home = () => {
  return (
    <div className='home_container' style={{backgroundImage:'url("./homebg.png")'}}>
      <div className='home_left'>
        <div className='home_main'>
          <p className='home_text1'>Food</p>
          <p className='home_text2'>Discover Restaurant & Delicious Food</p>
          <div className='search_container'>
            <input
              type='text'
              className='search_input'
              placeholder='search restaurant, food'
            />
            <button className='go_btn'>GO</button>
          </div>
        </div>
      </div>
      <div className='home_bottom'>
        <button className='location_btn'>
          <FaLocationDot style={{ fontSize: '28px' }} />
          Indore
        </button>
        <div className='arrows_right'>
          <img src='./homearrowleft.png' alt='homearrowleft' />
          <img src='./homearrowright.png' alt='homearrowright' />
        </div>
      </div>
    </div>
  )
}

export default Home
