import { useEffect } from 'react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./FloorBtns.scss";

export default function FloorBtns() {
    const [floorBtnAct, setFloorBtnAct] = useState(1)
    const location = useLocation()
    const floorBtns = [
        { id: 1, floor: 'B1', path: '/floorB1F' },
        { id: 2, floor: '1F', path: '/floor1F' },
        { id: 3, floor: '2F', path: '/floor2F' },
    ]

    useEffect(() => {
        floorBtns.map(item => location.pathname === item.path ? setFloorBtnAct(item.id) : "")
    }, [location.pathname])

    return (
        <>
            <div className="floorbtns">
                <ul className="floorbtns__list">
                    <li className="floorbtns__item-animation"
                        style={{ transform: `translate(-50%, -${floorBtnAct * 84 - 84}px)` }}>
                    </li>

                    {floorBtns.reverse().map(item => (
                        <Link to={item.path} key={item.id}>
                            <li
                                onClick={() => setFloorBtnAct(item.id)}
                                className={`floorbtns__item ${floorBtnAct === item.id ? "floorBntAct" : ""}`}
                            >
                                <button className='floorbtns__item-btn'>{item.floor}</button>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}
