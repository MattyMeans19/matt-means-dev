import React, {useState, useEffect, useRef} from "react";
import CMDicon from "/icons8-command-64.png";
import TopBar from "./TopBar";
import Draggable, {DraggableCore} from "react-draggable";

function Window(props){
    const [isActive, ToggleActive] = useState(props.visibility);
    const [minimized, ToggleMinimized] = useState(false);
    const [width] = useState(props.width);
    const [height] = useState(props.height);
    const nodeRef = useRef(null);

    function close(){
        ToggleActive(false);
    }

    function MinimizedClicked(){
        ToggleMinimized(!minimized);
    }


    return(
        <Draggable nodeRef={nodeRef}
            allowAnyClick="false"
            handle=".handler"
            axis="both"
            defaultPosition={{x: 500, y: -300}}
        >
            <div ref={nodeRef} className="handler" >
                <div className={[`border-10 border-green-700 rounded-2xl select-none ${isActive ? 'visible' : 'hidden'} 
                    ${minimized ? 'hidden ' : 'animate-fade-up animate-once animate-duration-100 animate-ease-in animate-normal visible'} absolute ${width} ${height} overflow-y-clip`]}>
                    <TopBar 
                        icon= {CMDicon}
                        name= "Welcome!"
                        onClose={close}
                        onMinimize={MinimizedClicked}
                    />
                    {props.content}
                </div> 
            </div>
          
        </Draggable>


    )
}

export default Window;