import React from 'react'
import Styled from 'styled-components';

const DayWeatherContainer = Styled.div` 
    background-color: #1E213A;
    padding: 12px;
`
export default function DayWeatherComponent({max_temp, min_temp, applicable_date}) {
    return (
        <DayWeatherContainer className="day_weather_container">
            <h3 className="day">{applicable_date}</h3>
            <div className="temperature">
                <p>{Math.round(max_temp)}C</p>
                <p>{Math.round(min_temp)}C</p>
            </div>
        </DayWeatherContainer>
    )
}
