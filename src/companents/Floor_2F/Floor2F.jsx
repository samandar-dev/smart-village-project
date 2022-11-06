import React from 'react';
import CafeImgInfo from '../CafeImgInfo/CafeImgInfo';
import CrowdedRoad from '../CrowdedRoad/CrowdedRoad';
import Dashboard from '../Dashboard/Dashboard';
import SmartVillageTopDesc from '../SmartVillageTopDesc/SmartVillageTopDesc';
import TitleFloor from '../TitleFloor/TitleFloor';
import Weater from '../Weater/Weater';
import "./Floor2F.scss";

export default function Floor2F() {
    return (
        <>
            <div className="floor1F">
                <div className="floor1F__top">
                    <TitleFloor title={'2F'} />
                    <SmartVillageTopDesc />
                    <Weater />
                </div>

                <div className="floor1F__main">
                    <div className='floor1F__main-left'>
                        <Dashboard floor={'2F'}/>
                        <CrowdedRoad floor={'2F'}/>
                    </div>

                    <div className="floor1F__main-right">
                        <CafeImgInfo floor={'2F'} />
                    </div>
                </div>
            </div>
        </>
    )
}
