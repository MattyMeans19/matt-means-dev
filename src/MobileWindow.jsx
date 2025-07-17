import React from "react";
import Welcome from "./Welcome";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Settings from "./Settings";
import RPS from "./RPS";
import Pinball from "./Pinball";
import Solitaire from "./Solitaire";
import SBB from "./SBB";
import SBM from "./SBM";
import SBP from "./SBP";

function MobileWindow(props){
    const apps = [<Welcome/>, <About/>, <Skills />, <Portfolio />, <Settings bgUpdate = {updateBG} fontUpdate = {updateFont} />, <RPS />, <Pinball />, <Solitaire />, <SBB />, <SBM />, <SBP />];

    function updateBG(newBG){
        props.bgUpdate(newBG);
    }
    function updateFont(newFont){
        props.fontUpdate(newFont)
    }
    return(
        <div className={[`absolute inset-y-10 bottom-13 overflow-y-scroll ${props.minimized ? "hidden" : "visible"} mobile`]}>
            {apps[props.id-1]}
        </div>
    )
}

export default MobileWindow;