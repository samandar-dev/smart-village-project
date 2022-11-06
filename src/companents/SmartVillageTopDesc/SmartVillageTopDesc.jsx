import React from 'react';
import SmartVillage_Logo from "../../assets/images/smart-village-logo.png";
import "./SmartVillageTopDesc.scss";

export default function SmartVillageTopDesc() {
    return (
        <>
            <div className="smartvillage">
                <div className="smartvillage__logo-box">
                    <img src={SmartVillage_Logo} alt="smart village logo" />
                </div>

                <p className='smartvillage__description'>
                    현재 스마트빌리지 커뮤니티센터에 총 <span>62명</span>이 있습니다. <br />
                    그 중 가장 사람이 많은 곳은 <b>스마트카페</b>입니다.
                </p>
            </div>
        </>
    )
}
