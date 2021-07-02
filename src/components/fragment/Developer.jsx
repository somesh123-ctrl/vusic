import React from 'react';
import '../assets/scss/Developer.scss';
import AvatarImage from "../assets/img/avatar.jpg";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developer</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Somesh shirpe</h3>
                        <p>Full Stack developer</p>
                        <p>Competitive Coder</p>
                    </div>
                </div>
              

            </div>
        </div>
    );
}

export default Developer;