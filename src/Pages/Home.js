import React from "react";
import NavBottom from "../Components/NavBottom";
import Camera from "../Components/Camera";
import Theme from "../Components/Theme";
import ReceiptToData from "../Components/ReceiptToData";
const Home = () => {

    return (
        <>
            <Theme>
                <ReceiptToData/>
            </Theme>
            <NavBottom/>
        </>
    );
};

export default Home;
