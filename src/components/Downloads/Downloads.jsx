import React from 'react'
import './Downloads.css'

const Downloads = () => {
  return (
    <div
      className='downloads_container'
      style={{ backgroundImage: 'url("./downloadsbg.png")' }}
    >
      <div className='main_downloads'>
        <div className='bar_line' />
        <div className='details_column'>
          <p className='left_text_downloads'>Download app for Exciting Deals</p>
          <p className='left_sub'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            consequuntur ipsum necessitatibus ipsa
          </p>
          <div className='app_icons'>
            <div className='single_app_Icon'>
              <img src='./appstoreicon1.png' alt='playstore' />
              <div>
                <p className='title_small'>GET IT ON</p>
                <p className='title_big'>Google Play</p>
              </div>
            </div>
            <div className='single_app_Icon'>
              <img src='./appstoreicon2.png' alt='applestore' />
              <div>
                <p className='title_small'>DOWNLOAD ON THE</p>
                <p className='title_big'>App Store</p>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Downloads
