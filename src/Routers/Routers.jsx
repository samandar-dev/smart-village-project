import React from 'react';
import { Route, Routes } from 'react-router';
import Floor1F from '../companents/Floor_1F/Floor1F';
import Floor2F from '../companents/Floor_2F/Floor2F';
import FloorB1F from "../companents/FloorB1F/FloorB1F";
import FloorBtns from '../companents/FloorsBtns/FloorBtns';

export default function Routers() {
    return (
        <>
            <Routes>
                <Route path='/' element={<FloorB1F />} />
                <Route path='/floorB1F' element={<FloorB1F />} />
                <Route path='/floor1F' element={<Floor1F />} />
                <Route path='/floor2F' element={<Floor2F />} />
            </Routes>

            <FloorBtns />
        </>
    )
}
