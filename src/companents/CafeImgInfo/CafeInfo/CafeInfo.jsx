import React from 'react';
import CafeInfoImg_1 from "../../../assets/icons/kafeInfo-icon-1.svg";
import CafeInfoImg_2 from "../../../assets/icons/kafeInfo-icon-2.svg";
import CafeInfoImg_3 from "../../../assets/icons/kafeInfo-icon-3.svg";
import CafeInfoImg_4 from "../../../assets/icons/kafeInfo-icon-4.svg";
import CafeInfoImg_5 from "../../../assets/icons/kafeInfo-icon-5.svg";
import CafeB1ImgMini1F from "../../../assets/images/floor1F-mini-img.png";
import CafeB1ImgMini2F from "../../../assets/images/floor2F-mini-img.png";
import CafeB1ImgMiniB1F from "../../../assets/images/floorB1-mini-img.png";
import './CafeInfo.scss';

export default function CafeInfo(props) {
    const cafeInof = [
        {
            id: 1,
            exit_value: 2,
            categor: 'B1F',
            realstep_value: 1,
            extinguisher_value: 0,
            radar_sencer_value: 3,
            ir_gate_senser_value: 0,
            exit_name: "Exit",
            realstep_name: "Realstep Spot",
            ir_gate_name: "IR Gate senser",
            radar_sencer_name: "Radar sencer",
            extinguisher_name: "Extinguisher",
        },
        {
            id: 2,
            categor: '1F',
            realstep_name: "Realstep Spot",
            ir_gate_name: "IR Gate senser",
            radar_sencer_name: "Radar sencer",
            exit_name: "Exit",
            extinguisher_name: "Extinguisher",
            realstep_value: 2,
            ir_gate_senser_value: 0,
            radar_sencer_value: 3,
            exit_value: 1,
            extinguisher_value: 1
        },
        {
            id: 3,
            categor: '2F',
            realstep_name: "Realstep Spot",
            ir_gate_name: "IR Gate senser",
            radar_sencer_name: "Radar sencer",
            exit_name: "Exit",
            extinguisher_name: "Extinguisher",
            realstep_value: 1,
            ir_gate_senser_value: 0,
            radar_sencer_value: 3,
            exit_value: 1,
            extinguisher_value: 1
        },
    ]

    return (
        <>
            <div className="cafeinfo">
                <div className="cafeinfo__img-box">
                    {props.floor === 'B1F' ?
                        <img src={CafeB1ImgMiniB1F} alt="" /> :
                        props.floor === '1F' ?
                            <img src={CafeB1ImgMini1F} alt="" /> :
                            props.floor === '2F' ?
                                <img src={CafeB1ImgMini2F} alt="" /> : ""
                    }
                </div>

                <div className="cafeinfo__list-box">
                    {cafeInof.map(item => (
                        item.categor === props.floor ?
                            <ul className="cafeinfo__list" key={item.id}>
                                <li className={`cafeinfo__item ${item.realstep_value === 0 ? "cafeItemDisabled" : ""}`}>
                                    <img src={CafeInfoImg_1} alt="realstep spot" />

                                    <div className="cafeinfo__item-desc">
                                        <p className='cafeinfo__item-title'>{item.realstep_name}</p>
                                        <span>{item.realstep_value}</span>
                                    </div>
                                </li>
                                <li className={`cafeinfo__item ${item.ir_gate_senser_value === 0 ? "cafeItemDisabled" : ""}`}>
                                    <img src={CafeInfoImg_2} alt="realstep spot" />

                                    <div className="cafeinfo__item-desc">
                                        <p className='cafeinfo__item-title'>{item.ir_gate_name}</p>
                                        <span>{item.ir_gate_senser_value}</span>
                                    </div>
                                </li>
                                <li className={`cafeinfo__item ${item.radar_sencer_value === 0 ? "cafeItemDisabled" : ""}`}>
                                    <img src={CafeInfoImg_3} alt="realstep spot" />

                                    <div className="cafeinfo__item-desc">
                                        <p className='cafeinfo__item-title'>{item.radar_sencer_name}</p>
                                        <span>{item.radar_sencer_value}</span>
                                    </div>
                                </li>
                                <li className={`cafeinfo__item ${item.exit_value === 0 ? "cafeItemDisabled" : ""}`}>
                                    <img src={CafeInfoImg_4} alt="realstep spot" />

                                    <div className="cafeinfo__item-desc">
                                        <p className='cafeinfo__item-title'>{item.exit_name}</p>
                                        <span>{item.exit_value}</span>
                                    </div>
                                </li>
                                <li className={`cafeinfo__item ${item.extinguisher_value === 0 ? "cafeItemDisabled" : ""}`}>
                                    <img src={CafeInfoImg_5} alt="realstep spot" />

                                    <div className="cafeinfo__item-desc">
                                        <p className='cafeinfo__item-title'>{item.extinguisher_name}</p>
                                        <span>{item.extinguisher_value}</span>
                                    </div>
                                </li>
                            </ul> : ""
                    ))}
                </div>
            </div>
        </>
    )
}
