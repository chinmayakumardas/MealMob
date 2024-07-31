import React from 'react'
import './AppDownload.css'
import { assets } from './../../assets/assets';
const AppDownload = () => {
  return (
    <div id='app-download' className='app-download'>
        <p>For Better Experience Download <br/> MealMob App</p>
        <div className='app-download-platform'>
                <img src={assets.play_store}/>
                <img src={assets.app_store}/>
        </div>
    </div>
  )
}

export default AppDownload