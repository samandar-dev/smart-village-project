import { useState } from 'react';
import React from 'react';
import "./Dashboard.scss";

export default function Dashboard(props) {
    const [hoverModal, setHoverModal] = useState();
    const [btnsAct, setBtnsAct] = useState(1)
    const tableLine = [300, 200, 150, 100, 50, 30]
    const statistica = [
        {
            id: 1,
            categor: 'B1F',
            info: [
                {
                    infoId: 1,
                    categor: '10',
                    val_one_id: '1_1',
                    val_two_id: '1_2',
                    user_count_one: 11,
                    user_count_two: 3,
                    date_one: '10월 12일 11:00',
                    value_one: 65, value_two: 14
                },
                {
                    infoId: 2,
                    categor: '20',
                    val_one_id: '2_1',
                    val_two_id: '2_2',
                    user_count_one: 12,
                    user_count_two: 4,
                    date_one: '9월 13일 12:00',
                    value_one: 65, value_two: 76
                },
                {
                    infoId: 3,
                    categor: '30',
                    val_one_id: '3_1',
                    val_two_id: '3_2',
                    user_count_one: 13,
                    user_count_two: 5,
                    date_one: '8월 14일 13:00',
                    value_one: 59, value_two: 43
                },
                {
                    infoId: 4,
                    categor: '40',
                    val_one_id: '4_1',
                    val_two_id: '4_2',
                    user_count_one: 14,
                    user_count_two: 6,
                    date_one: '7월 15일 14:00',
                    value_one: 85, value_two: 72
                },
                {
                    infoId: 5,
                    categor: '50',
                    val_one_id: '5_1',
                    val_two_id: '5_2',
                    user_count_one: 15,
                    user_count_two: 7,
                    date_one: '6월 16일 15:00',
                    value_one: 26, value_two: 32
                },
                {
                    infoId: 6,
                    categor: '60',
                    val_one_id: '6_1',
                    val_two_id: '6_2',
                    user_count_one: 16,
                    user_count_two: 8,
                    date_one: '5월 17일 16:00',
                    value_one: 26, value_two: 18
                }
            ]
        },
        {
            id: 2,
            categor: '1F',
            info: [
                {
                    infoId: 1,
                    categor: '10',
                    val_one_id: '1_1',
                    val_two_id: '1_2',
                    user_count_one: 5,
                    user_count_two: 15,
                    date_one: '10월 12일 11:00',
                    value_one: 95,
                    value_two: 38
                },
                {
                    infoId: 2,
                    categor: '20',
                    val_one_id: '2_1',
                    val_two_id: '2_2',
                    user_count_one: 9,
                    user_count_two: 13,
                    date_one: '9월 13일 12:00',
                    value_one: 82,
                    value_two: 12
                },
                {
                    infoId: 3,
                    categor: '30',
                    val_one_id: '3_1',
                    val_two_id: '3_2',
                    user_count_one: 13,
                    user_count_two: 5,
                    date_one: '8월 14일 13:00',
                    value_one: 29,
                    value_two: 12
                },
                {
                    infoId: 4,
                    categor: '40',
                    val_one_id: '4_1',
                    val_two_id: '4_2',
                    user_count_one: 4,
                    user_count_two: 5,
                    date_one: '7월 15일 14:00',
                    value_one: 38,
                    value_two: 7
                },
                {
                    infoId: 5,
                    categor: '50',
                    val_one_id: '5_1',
                    val_two_id: '5_2',
                    user_count_one: 11,
                    user_count_two: 2,
                    date_one: '6월 16일 15:00',
                    value_one: 64,
                    value_two: 13
                },
                {
                    infoId: 6,
                    categor: '60',
                    val_one_id: '6_1',
                    val_two_id: '6_2',
                    user_count_one: 16,
                    user_count_two: 8,
                    date_one: '5월 17일 16:00',
                    value_one: 38,
                    value_two: 7
                }
            ]
        },
        {
            id: 3,
            categor: '2F',
            info: [
                {
                    infoId: 1,
                    categor: '10',
                    val_one_id: '1_1',
                    val_two_id: '1_2',
                    user_count_one: 11,
                    user_count_two: 3,
                    date_one: '10월 12일 11:00',
                    value_one: 79,
                    value_two: 65
                },
                {
                    infoId: 2,
                    categor: '20',
                    val_one_id: '2_1',
                    val_two_id: '2_2',
                    user_count_one: 12,
                    user_count_two: 4,
                    date_one: '9월 13일 12:00',
                    value_one: 59,
                    value_two: 36
                },
                {
                    infoId: 3,
                    categor: '30',
                    val_one_id: '3_1',
                    val_two_id: '3_2',
                    user_count_one: 13,
                    user_count_two: 5,
                    date_one: '8월 14일 13:00',
                    value_one: 85,
                    value_two: 102
                },
                {
                    infoId: 4,
                    categor: '40',
                    val_one_id: '4_1',
                    val_two_id: '4_2',
                    user_count_one: 14,
                    user_count_two: 6,
                    date_one: '7월 15일 14:00',
                    value_one: 58, value_two: 49
                },
                {
                    infoId: 5,
                    categor: '50',
                    val_one_id: '5_1',
                    val_two_id: '5_2',
                    user_count_one: 15,
                    user_count_two: 7,
                    date_one: '6월 16일 15:00',
                    value_one: 38, value_two: 59
                },
                {
                    infoId: 6,
                    categor: '60',
                    val_one_id: '6_1',
                    val_two_id: '6_2',
                    user_count_one: 16,
                    user_count_two: 8,
                    date_one: '5월 17일 16:00',
                    value_one: 24, value_two: 65
                }
            ]
        },
    ]

    return (
        <>
            <div className="dashboard">
                <div className="dashboard__top">
                    <h3 className='dashboard__title'>Busan Eco Delta City</h3>

                    <div className='dashboard__residents-title-box'>
                        <p className='dashboard__residents-title'>현재 체류인원</p>
                        <p className='dashboard__residents-number'>10 <span>명</span></p>
                    </div>
                </div>

                <div className="dashboard__dash">
                    <div className="dashboard__dash-table">
                        <ul className="dashboard__dash-table-list-one">
                            {tableLine.map((item, inx) => (
                                <li className="dashboard__dash-table-item-one" key={inx + 1}>
                                    <p>{item}</p>
                                    <span></span>
                                </li>
                            ))}
                        </ul>

                        <div className="dashboard__dash-table-box">
                            <div className="dashboard__dash-table-today-box">
                                <p className='dashboard__dash-table-today'>TODAY</p>
                            </div>

                            <ul className="dashboard__dash-table-list-two">
                                {statistica.map(item => (
                                    item.info.map(itemChild => (
                                        item.categor === props.floor ?
                                            <li className="dashboard__dash-table-item-two" key={item.id}>
                                                <p>{itemChild.categor}분 전</p>
                                            </li>
                                            : ""
                                    ))
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="dashboard__dash-info">
                        <div className="dashboard__dash-info-counting">
                            <div className="dashboard__dash-info-counting-title">
                                <p>집계중</p>
                            </div>
                        </div>

                        <div className="dashboard__dash-info-statc">
                            <ul className="dashboard__dash-info-statc-list">
                                {statistica.map(item => (
                                    item.info.map(itemChild => (
                                        item.categor === props.floor ?
                                            <li className="dashboard__dash-info-statc-item" key={item.id}>
                                                <div
                                                    className="dashboard__dash-info-statc-item-child-one"
                                                    onMouseDown={() => setHoverModal(itemChild.val_one_id)}
                                                    style={{ animation: `${"floor" + itemChild.val_one_id} 1s both linear` }}
                                                >
                                                    <style>
                                                        {`@keyframes ${"floor" + itemChild.val_one_id}{
                                                            100% {height: ${itemChild.value_one}px;}
                                                        }`}
                                                    </style>

                                                    <div className={`dashboard__dashHover-info ${itemChild.val_one_id === hoverModal ? "dashInfoActOne" : ""}`}>
                                                        <span></span>

                                                        <div className="dashboard__dashHover-info-desc">
                                                            <p className="dashboard__dashHover-info-user-count-one">{itemChild.user_count_one}명</p>
                                                            <p className="dashboard__dashHover-info-user-count-two">{itemChild.user_count_two}명</p>
                                                            <p className="dashboard__dashHover-info-time-day">{itemChild.date_one}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    className="dashboard__dash-info-statc-item-child-two"
                                                    onMouseDown={() => setHoverModal(itemChild.val_two_id)}
                                                    style={{ animation: `${"floor" + itemChild.val_two_id} 1s both linear` }}
                                                >
                                                    <style>
                                                        {`@keyframes ${"floor" + itemChild.val_two_id} {
                                                            100% { height: ${itemChild.value_two}px; }
                                                        }`}
                                                    </style>

                                                    <div className={`dashboard__dashHover-info ${itemChild.val_two_id === hoverModal ? "dashInfoActTwo" : ""}`}>
                                                        <span></span>

                                                        <div className="dashboard__dashHover-info-desc">
                                                            <p className="dashboard__dashHover-info-user-count-one">{itemChild.user_count_one}명</p>
                                                            <p className="dashboard__dashHover-info-user-count-two">{itemChild.user_count_two}명</p>
                                                            <p className="dashboard__dashHover-info-time-day">{itemChild.date_one}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            : ""
                                    ))
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="dashboard__dash-info-statc-doc-box">
                    <p className="dashboard__dash-info-statc-doc-one"><span></span> 스마트 카페</p>
                    <p className="dashboard__dash-info-statc-doc-two"><span></span> 무인편의점 및 택배보관소</p>
                </div>

                <div className="dashboard__dash-info-btns">
                    <button
                        className={`dashboard__dash-info-btn-one ${btnsAct === 1 ? "dash-info-btn-act" : ""}`}
                        onClick={() => setBtnsAct(1)}>스마트 카페
                    </button>
                    <button
                        className={`dashboard__dash-info-btn-two ${btnsAct === 2 ? "dash-info-btn-act" : ""}`}
                        onClick={() => setBtnsAct(2)}>무인 편의점 & 택배보관소
                    </button>
                </div>
            </div>
        </>
    )
}
