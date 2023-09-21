import React from "react";
import Form from "./LoginForm";
// import Illustration from "./HeroSection";

const Banner = () => {
    return (
        <div className="banner" style={{display: "flex", justifyContent: "center", alignItems : "center"}}>
            <Form/>
            {/* <Illustration/> */}
        </div>
    )
}
export default Banner