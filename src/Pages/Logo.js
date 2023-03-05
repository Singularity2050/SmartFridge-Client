import React from "react";
import {Image} from "@mui/icons-material";
import Logo from "../Image/main.jpeg";
import Grid from "@mui/material/Grid";
const LogoPage = () => {

    return (
        <img src={Logo} alt="Logo" style={{minHeight:window.innerHeight, minWidth:window.innerWidth}}/>
    );
};

export default LogoPage;
