import React from "react";
import NavBottom from "../Components/NavBottom";
import Camera from "../Components/Camera";
import Theme from "../Components/Theme";
const Home = () => {

    return (
        <>
            <Theme>
                <Camera/>
            </Theme>
            <NavBottom/>
        </>
    );
};

export default Home;
