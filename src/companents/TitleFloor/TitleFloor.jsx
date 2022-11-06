import React from 'react';
import "./TitleFloor.scss";

export default function TitleFloor(props) {
    return (
        <>
            <div className="titlefloor">
                <p className='titlefloor__tit'>Community Center</p>
                <h2 className="titlefloor__title">{props.title}</h2>
            </div>
        </>
    )
}
