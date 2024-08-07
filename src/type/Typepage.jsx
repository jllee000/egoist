import React, { useState } from "react";
import styles from "./type.css";
import About from "./About";

export default function TypePage() {
    const [selectedType, setSelectedType] = useState(null);
    const [aboutType, setAboutType] = useState(null);
    const [isAboutVisible, setIsAboutVisible] = useState(false);

    const handleSelect = (type) => {
        if (type === 0) {
            setAboutType(null);
        } else {
            setSelectedType(type);
            setAboutType(type);
        }
    };

    return (
        <div className={`typepage ${isAboutVisible === true ? "typepage-hidden" : ""}`}>
            {aboutType !== null && (
                <About
                    onSelect={handleSelect}
                    type={aboutType}
                    isVisible={isAboutVisible}
                    setIsVisible={setIsAboutVisible}
                />
            )}
            <div className="typepage-main">
                <div className="typepage-title">
                    <img src="/images/intro/mytypetitle.png" alt="title" className="img-width" />
                </div>
                <div className="type-select-area">
                    <div
                        className={`type-box type-box-1 ${selectedType === 1 ? "type-box-1-active" : ""}`}
                        onClick={() => {
                            setAboutType(1);
                            setIsAboutVisible(true);
                        }}
                    >
                        <img className="img-width" alt="type1" src="/images/intro/type1.png" />
                    </div>
                    <div
                        className={`type-box type-box-2 ${selectedType === 2 ? "type-box-2-active" : ""}`}
                        onClick={() => {
                            setAboutType(2);
                            setIsAboutVisible(true);
                        }}
                    >
                        <img className="img-width" alt="type2" src="/images/intro/type2.png" />
                    </div>
                    <div
                        className={`type-box type-box-3 ${selectedType === 3 ? "type-box-3-active" : ""}`}
                        onClick={() => {
                            setAboutType(3);
                            setIsAboutVisible(true);
                        }}
                    >
                        <img className="img-width" alt="type3" src="/images/intro/type3.png" />
                    </div>
                    <div
                        className={`type-box type-box-4 ${selectedType === 4 ? "type-box-4-active" : ""}`}
                        onClick={() => {
                            setAboutType(4);
                            setIsAboutVisible(true);
                        }}
                    >
                        <img className="img-width" alt="type4" src="/images/intro/type4.png" />
                    </div>
                    <div
                        className={`type-box type-box-5 ${selectedType === 5 ? "type-box-5-active" : ""}`}
                        onClick={() => {
                            setAboutType(5);
                            setIsAboutVisible(true);
                        }}
                    >
                        <img className="img-width" alt="type5" src="/images/intro/type5.png" />
                    </div>
                </div>
                <div className="typepage-btn-area">
                    <div className="typepage-btn">다음</div>
                </div>
            </div>
        </div>
    );
}
