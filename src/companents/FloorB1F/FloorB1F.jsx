import React from 'react';
import Weater from '../Weater/Weater';
import Dashboard from '../Dashboard/Dashboard';
import TitleFloor from '../TitleFloor/TitleFloor';
import CrowdedRoad from '../CrowdedRoad/CrowdedRoad';
import CafeImgInfo from '../CafeImgInfo/CafeImgInfo';
import SmartVillageTopDesc from '../SmartVillageTopDesc/SmartVillageTopDesc';
import "./FloorB1F.scss";

export default function FloorB1() {
    return (
        <>
            <div className="floorB1F">
                <div className="floorB1F__top">
                    <TitleFloor title={'B1F'} />
                    <SmartVillageTopDesc />
                    <Weater />
                </div>

                <div className="floorB1F__main">
                    <div className='floorB1F__main-left'>
                        <Dashboard floor={'B1F'} />
                        <CrowdedRoad floor={'B1F'} />
                    </div>

                    <div className="floor1F__main-right">
                        <CafeImgInfo floor={'B1F'} />
                    </div>
                </div>
            </div>
        </>
    )
}
