import React from 'react'
import './Footer.css'
import { FaArrowRight } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='last_container'>
      <img src='./lastbg.png' alt='lastbg' />
      <div className='footer_container'>
        <p className='footer_main_note'>Get notified</p>
        <p className='footer_main_note next_line'>about new amazing products</p>
        <p className='foot_sub_note'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          debitis provident qui voluptate saepe tempora dolore commodi
          laudantium beatae tempore.
        </p>
        <div className='email_container'>
          <input type='text' className='email_input' placeholder='email' />
          <button className='emailgo_btn'>
            <FaArrowRight style={{ fontSize: '15px' }} />
          </button>
        </div>
        <div className='page_links'>
          {['Product', 'Company', 'Learn more', 'Get in touch'].map(
            (item, i) => {
              return (
                <button key={i} className='individual_links'>
                  {item}
                </button>
              )
            }
          )}
        </div>
      </div>
      <div className='footer_social'>
        {
          [
            './socialicon1.png','./socialicon2.png','./socialicon3.png'
          ].map( ( item, i ) => {
            return <img key={i} src={item} alt={item}/>
          })
        }
        <p className='copyright'>&copy; 2022 Techverse World</p>
      </div>
    </div>
  )
}

export default Footer
