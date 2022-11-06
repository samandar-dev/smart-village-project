import React from 'react';
import Cafe1F from './Cafe_1F/Cafe1F';
import Cafe2F from './Cafe_2F/Cafe2F';
import CafeB1F from './Cafe_B1F/CafeB1F';
import CafeInfo from './CafeInfo/CafeInfo';
import "./CafeImgInfo.scss";

export default function CafeImgInfo(props) {
    return (
        <>
            <div className="cafe">
                {props.floor === 'B1F' ? <CafeB1F /> :
                    props.floor === '1F' ? <Cafe1F /> :
                        props.floor === '2F' ? <Cafe2F /> : ""
                }

                <div className={`cafe__img-info-mod 
                    ${props.floor === 'B1F' ? "cafeInfoModalTop-B1F" :
                        props.floor === '1F' ? "cafeInfoModalTop-1F" :
                            props.floor === '2F' ? "cafeInfoModalTop-2F" : ""}`
                }>
                    <span className='cafe__img-info-mod-oval-zona'>
                        <span></span>
                        <span></span>
                        <div className='cafe__img-info-mod-metka'></div>
                    </span>

                    <div className="cafe__img-info-mod-dashed">
                        <span className="cafe__img-info-mod-dashed-line-1"></span>
                        <span className="cafe__img-info-mod-dashed-line-2"></span>
                    </div>

                    <div className="cafe__img-info-mod-modal">
                        <div className="cafe__img-info-mod-modal-desc">
                            <p className='cafe__img-info-mod-modal-desc-text'>무인편의점 & 택배보관소</p>
                            <p className='cafe__img-info-mod-modal-user-number'><span>2</span> 명</p>
                        </div>
                        <p className="cafe__img-info-mod-modal-desc-tit">최근 동작 감지 22. 01. 24 18:19:31</p>
                    </div>
                </div>

                <div className={`cafe__img-info-mod-two 
                    ${props.floor === 'B1F' ? "cafeInfoModalBottom-B1F" :
                        props.floor === '1F' ? "cafeInfoModalBottom-1F" :
                            props.floor === '2F' ? "cafeInfoModalBottom-2F" : ""}`
                }>
                    <span className='cafe__img-info-mod-oval-zona-two'>
                        <span></span>
                        <span></span>
                        <div className='cafe__img-info-mod-metka-two'></div>
                    </span>

                    <div className="cafe__img-info-mod-dashed-two">
                        <span className="cafe__img-info-mod-dashed-line-1-two"></span>
                        <span className="cafe__img-info-mod-dashed-line-2-two"></span>
                    </div>

                    <div className="cafe__img-info-mod-modal-two">
                        <div className="cafe__img-info-mod-modal-desc">
                            <p className='cafe__img-info-mod-modal-desc-text'>스마트카페</p>
                            <p className='cafe__img-info-mod-modal-user-number'><span>8</span> 명</p>
                        </div>
                        <p className="cafe__img-info-mod-modal-desc-tit">최근 동작 감지 22. 01. 24 18:19:31</p>
                    </div>
                </div>

                <CafeInfo floor={props.floor} />
            </div>
        </>
    )
}
