import React from 'react';
import { WiTime8 } from 'react-icons/wi';
import { FiCalendar } from 'react-icons/fi';
import "./CrowdedRoad.scss";

export default function CrowdedRoad(props) {
    const crowdedRoadInfo = [
        { id: 1, categor: 'B1F', value: 311 },
        { id: 2, categor: '1F', value: 629 },
        { id: 3, categor: '2F', value: 115 },
    ]

    return (
        <>
            <div className="crowded">
                <h3 className="crowded__title">붐빔도</h3>

                <div className="crowded__info">
                    {crowdedRoadInfo.map(item => (
                        item.categor === props.floor ?
                            <div className="crowded__info-range" key={item.id}>
                                <div className="crowded__info-range-anim">
                                    <span></span>
                                    <style>
                                        {`@keyframes animRange { 100% { width: ${item.value}px;} }`}
                                    </style>
                                </div>
                                <div className="crowded__info-range-line">
                                    <span></span>
                                </div>
                                <span></span>
                            </div> : ""
                    ))}

                    <ul className="crowded__info-renge-list">
                        <li className="crowded__info-range-item">
                            <p>양호</p>
                        </li>
                        <li className="crowded__info-range-item">
                            <p>보통</p>
                        </li>
                        <li className="crowded__info-range-item">
                            <p>약간혼잡</p>
                        </li>
                        <li className="crowded__info-range-item">
                            <p>혼잡</p>
                        </li>
                        <li className="crowded__info-range-item">
                            <p>매우혼잡</p>
                        </li>
                    </ul>
                </div>

                <div className="crowded__time-info">
                    <div className="crowded__time-info-busiest">
                        <div className="crowded__time-info-busiest-icon">
                            <WiTime8 />
                        </div>

                        <div className="crowded__time-info-busiest-desc">
                            <p className='crowded__time-info-desc-name'>가장 붐비는 시간&요일</p>
                            <p className='crowded__time-info-desc-time'>09:45 목요일 </p>
                        </div>
                    </div>

                    <div className="crowded__time-info-leisurely">
                        <div className="crowded__time-info-leisurely-icon">
                            <FiCalendar />
                        </div>

                        <div className="crowded__time-info-leisurely-desc">
                            <p className='crowded__time-info-desc-name'>가장 한가한 요일&시간</p>
                            <p className='crowded__time-info-desc-time'>화요일 11:05</p>
                        </div>
                    </div>
                </div>

                <p className='crowded__time-info-leisurely-text'>Last Inspection Date / 22.10.11</p>
            </div>
        </>
    )
}
