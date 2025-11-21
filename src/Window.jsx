import React, {useState, useEffect, useRef} from "react";
import TopBar from "./TopBar";
import Draggable, {DraggableCore} from "react-draggable";
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
import {Contact} from "./Email";
import Certs from "./Certs";

function Window(props){
    const [minimized, ToggleMinimized] = useState(props.minimized);
    const [focused, updateFocused] = useState(props.focus);
    const [width] = useState(props.width);
    const [height] = useState(props.height);
    const nodeRef = useRef(null);
    const apps = [<Welcome/>, <About/>, <Skills />, <Portfolio />, <Settings bgUpdate = {updateBG} fontUpdate = {updateFont} />, <RPS />, <Pinball />, <Solitaire />, <SBB />, <SBM />, <SBP />, <Contact />, <Certs />];

    useEffect(() => {
        if(minimized !== props.minimized){
            ToggleMinimized(props.minimized);
        }
        if(focused !== props.focus){
            updateFocused(props.focus);
        }
    }, [minimized, props.minimized, focused, props.focus])


    function close(){
        props.close(props.id)
    }

    function MinimizedClicked(){
        props.onMinimized(props.id);
    }

    function bringToFront(){
        if(focused === false){
            props.clicked(props.id);            
        }

    }

    function updateBG(newBG){
        props.bgUpdate(newBG);
    }
    function updateFont(newFont){
        props.fontUpdate(newFont)
    }


    return(         
        <Draggable nodeRef={nodeRef}
            allowAnyClick="false"
            handle=".handler"
            axis="both"
            defaultPosition={{x: 0, y: 0, z: 10}}
            
        >
            <div ref={nodeRef} className={[`${focused ? 'z-20' : 'z-10'}`]}>
                <div className={[`handler border-10 syscolor syscolor-Border rounded-t-2xl select-none
                    ${minimized ? 'hidden ' : 'animate-fade-up animate-once animate-duration-100 animate-ease-in animate-normal visible'} desktop ${width}`]}
                    >
                   <TopBar 
                        icon= {props.icon}
                        name= {props.name}
                        id= {props.id}
                        onClose={close}
                        onMinimize={MinimizedClicked}
                    /> 
                </div>    
                <div className={[`border-10 syscolor-Border rounded-b-2xl select-none 
                    ${minimized ? 'hidden ' : 'animate-fade-up animate-once animate-duration-100 animate-ease-in animate-normal visible'} desktop absolute ${width} ${height} overflow-y-clip`]}
                    onClick={() => (bringToFront())}>  
                    {apps[props.id - 1]}  
                </div> 
            </div>
        </Draggable>

    )
}

export default Window;