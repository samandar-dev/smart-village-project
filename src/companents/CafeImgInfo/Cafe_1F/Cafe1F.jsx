import React from 'react';
import CafeImg from "../../../assets/images/floor1F-img.png";
import CafeIcon_1 from "../../../assets/icons/cafe-icon-white-1.svg";
import CafeIcon_3 from "../../../assets/icons/cafe-icon-white-3.svg";
import CafeIcon_4 from "../../../assets/icons/cafe-icon-white-4.svg";
import CafeIcon_5 from "../../../assets/icons/cafe-icon-white-5.svg";
import './Cafe1F.scss';

export default function Cafe1F() {
    const cafeInfoItems = [
        { id: 1, icon: CafeIcon_3 },
        { id: 2, icon: CafeIcon_1 },
        { id: 3, icon: CafeIcon_3 },
        { id: 4, icon: CafeIcon_4 },
        { id: 5, icon: CafeIcon_3 },
        { id: 6, icon: CafeIcon_5 },
    ]

    return (
        <>
            <div className="cafe1F">
                <img className='cafe1F__img' src={CafeImg} alt="floor b1" />

                <div className="cafe1F__btns-box">
                    {cafeInfoItems.map(item => (
                        <button className="cafe1F__img-btn" key={item.id}>
                            <img src={item.icon} alt="cafe icon" />
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}
