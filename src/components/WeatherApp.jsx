import React, { useState } from 'react'
import './weatherApp.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'

const WeatherApp = () => {

    let apiKey = '04139978167fb2218b0159a7fae7746c';

    const [weatherIcon, setWeatherIcon] = useState(cloud_icon);


    // search function
    const search = async () => {


        const element = document.getElementsByClassName('cityInput');
        if (element[0].value === "") {
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;

        // fetch API
        let response = await fetch(url);
        let data = await response.json();
        // console.log(result)

        // get elemet & update data
        const temperature = document.getElementsByClassName('weather-temp');
        const city = document.getElementsByClassName('weather-location');
        const humidity = document.getElementsByClassName('humidity-per');
        const windSpeed = document.getElementsByClassName('wind-speed');

        temperature[0].innerHTML = data.main.temp + "°c";
        city[0].innerHTML = data.name;
        humidity[0].innerHTML = data.main.humidity + "%";
        windSpeed[0].innerHTML = data.wind.speed + " Kmph";

        //check weather icon
        if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n') {
            setWeatherIcon(clear_icon)
        }
        else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n') {
            setWeatherIcon(cloud_icon)
        }
        else if (data.weather[0].icon === '03d' || data.weather[0].icon === '03n') {
            setWeatherIcon(drizzle_icon)
        }
        else if (data.weather[0].icon === '04d' || data.weather[0].icon === '04n') {
            setWeatherIcon(clear_icon)
        }
        else if (data.weather[0].icon === '09d' || data.weather[0].icon === '09n') {
            setWeatherIcon(rain_icon)
        }
        else if (data.weather[0].icon === '13d' || data.weather[0].icon === '13n') {
            setWeatherIcon(snow_icon)
        }
        else {
            setWeatherIcon(clear_icon)
        }

    }
    return (
        <div className='container'>
            {/* searchbar */}
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder='Search' />
                <div className="search-icon" onClick={() => search()}>
                    <img src={search_icon} alt="" />
                </div>
            </div>

            {/* weather image */}
            <div className="weather-image">
                <img src={weatherIcon} alt="" />
            </div>

            {/* weather condition */}
            <div className="weather-temp">25°c</div>

            {/* weather location */}
            <div className="weather-location">London</div>

            {/* humidity / wind  */}
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-per">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-speed">85 Kmph</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default WeatherApp