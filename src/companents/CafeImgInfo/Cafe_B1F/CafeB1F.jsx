import React from 'react';
import CafeImg from "../../../assets/images/floorB1-img.png";
import CafeIcon_1 from "../../../assets/icons/cafe-icon-white-1.svg";
import CafeIcon_3 from "../../../assets/icons/cafe-icon-white-3.svg";
import CafeIcon_4 from "../../../assets/icons/cafe-icon-white-4.svg";
import './CafeB1F.scss';

export default function CafeB1F() {
    const cafeInfoItems = [
        { id: 1, icon: CafeIcon_3 },
        { id: 2, icon: CafeIcon_1 },
        { id: 3, icon: CafeIcon_3 },
        { id: 4, icon: CafeIcon_3 },
        { id: 5, icon: CafeIcon_4 },
        { id: 6, icon: CafeIcon_4 },
    ]

    return (
        <>
            <div className="cafeB1F">
                <img className='cafeB1F__img' src={CafeImg} alt="floor b1" />

                <div className="cafeB1F__btns-box">
                    {cafeInfoItems.map(item => (
                        <button className="cafeB1F__img-btn" key={item.id}>
                            <img src={item.icon} alt="cafe icon" />
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
}
