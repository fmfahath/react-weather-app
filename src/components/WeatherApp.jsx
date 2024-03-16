import React from 'react'
import './weatherApp.css'
import search_icon from '../assets/search.png'
import clear_img from '../assets/clear.png'
import cloud_img from '../assets/cloud.png'
import drizzle_img from '../assets/drizzle.png'
import humidity_img from '../assets/humidity.png'
import rain_img from '../assets/rain.png'
import search_img from '../assets/search.png'
import snow_img from '../assets/snow.png'
import wind_img from '../assets/wind.png'

const WeatherApp = () => {
    return (
        //search bar
        <div className='container'>
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder='Search' />
                <div className="search-icon">
                    <img src={search_icon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default WeatherApp