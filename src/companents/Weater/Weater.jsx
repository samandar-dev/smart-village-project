import React, { useEffect, useState } from 'react';
import weaterIcon1 from '../../assets/icons/weather-icon-1.svg';
import weaterIcon2 from '../../assets/icons/weather-icon-2.svg';
import weaterIcon3 from '../../assets/icons/weather-icon-3.svg';
import weaterIcon4 from '../../assets/icons/weather-icon-4.svg';
import weaterIcon5 from '../../assets/icons/weather-icon-5.svg';
import weaterIcon6 from '../../assets/icons/weather-icon-6.svg';
import weaterIcon7 from '../../assets/icons/weather-icon-7.svg';
import weaterIcon8 from '../../assets/icons/weather-icon-8.svg';
import "./Weater.scss";

export default function Weater() {
    const arr = ['Tashkent', 'Korea', 'Dubai', 'Russia', 'Argentina']
    const [iconIndex, setIconIndex] = useState();
    const [weatherToday, setWeathreToday] = useState();
    const [weatherSityName, setWeatherSityName] = useState(arr[0]);
    const weatherApiURL = `https://api.weatherapi.com/v1/current.json?key=31dfeabcfd6d4455a4251418220311&q=${weatherSityName}&aqi=no`;
    const weatherCategor = [
        { id: 1, categor: 'Sunny', icon: weaterIcon1 },
        { id: 2, categor: 'Cloudy', icon: weaterIcon8 },
        { id: 3, categor: 'Raing', icon: weaterIcon5 },
        { id: 4, categor: 'Lightning', icon: weaterIcon7 },
        { id: 5, categor: 'Light rain', icon: weaterIcon3 },
        { id: 6, categor: 'Rain Lightning', icon: weaterIcon6 },
        { id: 7, categor: 'Overcast', icon: weaterIcon8 },
        { id: 8, categor: 'More Sunny', icon: weaterIcon2 },
        { id: 9, categor: 'Light rain shower', icon: weaterIcon3 },
        { id: 10, categor: 'Patchy rain possible', icon: weaterIcon3 },
        { id: 11, categor: 'Partly cloudy', icon: weaterIcon2 },
        { id: 12, categor: 'Mist', icon: weaterIcon8 },
        { id: 12, categor: 'More cloudy', icon: weaterIcon4 },
    ]

    var days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

    Date.prototype.getDayName = function () {
        return days[this.getDay()];
    };

    const fetchHandler = () => {
        fetch(weatherApiURL)
            .then(res => res.json())
            .then(data => setWeathreToday(data))
    }

    const weatherHandler = () => {
        if (weatherToday !== undefined) {
            let obj = weatherCategor.find(item => {
                return item.categor === weatherToday.current.condition.text
            })
            obj !== undefined ? setIconIndex(obj.icon) : setIconIndex(weatherToday.current.condition.icon)
        }
    }

    setInterval(() => {
        window.location.reload()
        // setWeatherSityName(arr[Math.floor(Math.random(+1) * 4)])
        // fetchHandler()
        // console.log('aaa');
    }, 60000 * 60);

    useEffect(() => {
        weatherHandler()
    }, [iconIndex, weatherToday])

    useEffect(() => {
        fetchHandler()
    }, [])

    return (
        <>
            <div className="weater">
                <div className="weater__time-day-month">
                    <p className='weater__time'>
                        <span>{new Date().getHours() >= 12 ? 'PM' : 'AM'}</span>
                        {new Date().getHours() + ":" + (new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes())}
                    </p>

                    <p className='weater__day-month'>
                        {new Date().getMonth()}월 {new Date().getDate()}일 ({new Date().getDayName()})</p>
                </div>

                <div className="weater__weater-icon">
                    {weatherToday !== undefined ?
                        iconIndex !== undefined ?
                            <img src={iconIndex} alt="" /> :
                            <img src={iconIndex} alt="" /> : ""
                    }
                </div>
            </div>
        </>
    )
}
