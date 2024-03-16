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
import { clear } from '@testing-library/user-event/dist/clear'

const WeatherApp = () => {
    return (
        <div className='container'>
            {/* searchbar */}
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder='Search' />
                <div className="search-icon">
                    <img src={search_icon} alt="" />
                </div>
            </div>

            {/* weather image */}
            <div className="weather-image">
                <img src={clear_img} alt="" />
            </div>

            {/* weather condition */}
            <div className="weather-temp">25°c</div>

            {/* weather location */}
            <div className="weather-location">London</div>

            {/* humidity / wind  */}
            <div className="data-container">
                <div className="element">
                    <img src={humidity_img} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-per">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_img} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-per">85 Kmph</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default WeatherApp