import React from "react";
import '../../index.css'
import NavBar from "../NavBar";
import Footer from "../Footer";
import Content from "./Content";

function Prebuilds(){
    return(
        <div class="fjalla-one-regular templates-bg">
            <NavBar />
            <Content />
            <Footer />
        </div>
    );
}

export default Prebuilds;