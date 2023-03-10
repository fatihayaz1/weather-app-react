import "./weather.css"

import React from 'react'

const Weather = ({ data }) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-rescription">{data.weather[0].description}</p>
                </div>
                <img alt="weather" className="icon" src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label top">Detay</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Hissedilen</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Rüzgar</span>
                        <span className="parameter-value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Nem</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Basınç</span>
                        <span className="parameter-value">{data.main.pressure} hPa</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Weather