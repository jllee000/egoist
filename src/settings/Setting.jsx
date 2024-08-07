import React, { useState } from "react";
import styles from "./setting.css";
import { Link } from "react-router-dom";
export default function Setting() {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="setting-page">
            <div className="setting-title">설정</div>
            <div className="setting-area">
                <div className="setting-service">
                    <div className="setting-subtitle">서비스 설정</div>
                    <div className="setting-service-list">
                        <Link to="/nickname">
                            <div className="setting-service-li landing-nickname">
                                <div>닉네임 수정</div>
                                <div className="vector-img"><img alt="image" src="/images/vector.png"/></div>
                            </div>
                        </Link>
                        <Link to="/typepage">
                            <div className="setting-service-li">
                                <div>사용자 유형 재설정</div>
                                <div className="vector-img"><img alt="image" src="/images/vector.png"/></div>
                            </div>
                        </Link>
                      
                        <div className="setting-service-li">
                            <div>고정퀘스트 재설정</div>
                            <div className="vector-img"><img alt="image" src="/images/vector.png"/></div>
                        </div>
                    </div>
                </div>
                <div className="setting-alarm">
                    <div className="setting-subtitle">알림 설정</div>
                    <div>
                        <div className="setting-alarm-box-1 flex-row">
                            <div>알림 허용</div>
                            <div className="switch">
                                <input
                                    type="checkbox"
                                    id="chk1"
                                    checked={isChecked}
                                    onChange={handleToggle}
                                />
                                <label className="slider round" htmlFor="chk1"></label>
                            </div>
                        </div>
                        <div className="setting-alarm-box-2">
                           <div className="setting-alarm-li">
                                <div className="flex-col">
                                    <div className="setting-alarm-li-title">데일리 퀘스트 알림</div>
                                    <div className="setting-alarm-li-subtitle">오늘의 퀘스트가 도착했어요!</div>
                                </div>
                                <div className="switch">
                                    <input
                                        type="checkbox"
                                        id="chk1"
                                        checked={isChecked}
                                        onChange={handleToggle}
                                    />
                                    <label className="slider round" htmlFor="chk1"></label>
                                </div>
                           </div>
                        </div>
                        <div className="setting-alarm-box-2">
                           <div className="setting-alarm-li">
                                <div className="flex-col">
                                    <div className="setting-alarm-li-title">남은 퀘스트 알림</div>
                                    <div className="setting-alarm-li-subtitle">###님을 기다리고 있는 퀘스트가 있어요!</div>
                                </div>
                                <div className="switch">
                                    <input
                                        type="checkbox"
                                        id="chk1"
                                        checked={isChecked}
                                        onChange={handleToggle}
                                    />
                                    <label className="slider round" htmlFor="chk1"></label>
                                </div>
                           </div>
                        </div>
                        <div className="setting-alarm-box-2">
                           <div className="setting-alarm-li">
                                <div className="flex-col">
                                    <div className="setting-alarm-li-title">랜덤 퀘스트 알림</div>
                                    <div className="setting-alarm-li-subtitle">오늘의 랜덤 퀘스트가 남아있어요!</div>
                                </div>
                                <div className="switch">
                                    <input
                                        type="checkbox"
                                        id="chk1"
                                        checked={isChecked}
                                        onChange={handleToggle}
                                    />
                                    <label className="slider round" htmlFor="chk1"></label>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
                <div className="setting-qa">
                    <div className="setting-subtitle">문의</div>
                    <div className="setting-service-list">
                        <div className="setting-service-li">
                            <div>자주 묻는 질문들</div>
                            <div className="vector-img"><img alt="image" src="/images/vector.png"/></div>
                        </div>
                        <div className="setting-service-li">
                            <div>의견 보내기</div>
                            <div className="vector-img"><img alt="image" src="/images/vector.png"/></div>
                        </div>
                    </div>
                </div>
                <div className="setting-agency">
                    <div className="setting-subtitle">약관 및 방침</div>
                    <div className="setting-service-list">
                        <div className="setting-service-li">
                            <div>서비스 이용약관</div>
                            <div className="vector-img"><img alt="image" src="/images/vector.png"/></div>
                        </div>
                        <div className="setting-service-li">
                            <div>개인정보 처리방침</div>
                            <div className="vector-img"><img alt="image" src="/images/vector.png"/></div>
                        </div>
                    </div>
                </div>
                <div className="logout-btn">
                    로그아웃
                </div>
                <div className="exit">탈퇴하기</div>
            </div>
        </div>
    );
}
