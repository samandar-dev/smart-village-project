import React from 'react';
import Weater from '../Weater/Weater';
import Dashboard from '../Dashboard/Dashboard';
import TitleFloor from '../TitleFloor/TitleFloor';
import CafeImgInfo from '../CafeImgInfo/CafeImgInfo';
import CrowdedRoad from '../CrowdedRoad/CrowdedRoad';
import SmartVillageTopDesc from '../SmartVillageTopDesc/SmartVillageTopDesc';
import "./Floor1F.scss";

export default function Floor1F() {
    return (
        <>
            <div className="floor1F">
                <div className="floor1F__top">
                    <TitleFloor title={'1F'} />
                    <SmartVillageTopDesc />
                    <Weater />
                </div>

                <div className="floor1F__main">
                    <div className='floor1F__main-left'>
                        <Dashboard floor={'1F'}/>
                        <CrowdedRoad floor={'1F'}/>
                    </div>

                    <div className="floor1F__main-right">
                        <CafeImgInfo floor={'1F'} />
                    </div>
                </div>
            </div>
        </>
    )
}
