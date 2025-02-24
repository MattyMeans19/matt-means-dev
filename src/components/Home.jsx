import React from "react";
import NavBar from "./NavBar";
import Intro from "./Intro";
import Details from "./Details";
import Conclusion from "./Conclusion";
import Footer from "./Footer";

function Home(){
    return(
        <div class="fjalla-one-regular flex flex-col gap-50 flex-nowrap">
            <NavBar />
            <Intro />
            <Details />
            <Conclusion />
            <Footer />
      </div>
    )
}

export default Home;