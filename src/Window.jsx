import React, {useState, useEffect, useRef} from "react";
import TopBar from "./TopBar";
import Draggable, {DraggableCore} from "react-draggable";
import Welcome from "./Welcome";

function Window(props){
    const [isActive, ToggleActive] = useState(props.visibility);
    const [minimized, ToggleMinimized] = useState(props.minimized);
    const [zIndex, changeZIndex] = useState("z-10");
    const [width] = useState(props.width);
    const [height] = useState(props.height);
    const nodeRef = useRef(null);
    const apps = [<Welcome/>, "This is the About Me", "This is Skills", "This is my Portfolio"];

    useEffect(() => {
        if(isActive !== props.visibility){
            ToggleActive(props.visibility);
        }
        if(minimized !== props.minimized){
            ToggleMinimized(props.minimized);
        }
    }, [isActive, props.visibility, minimized, props.minimized])


    function close(){
        props.close(props.id)
    }

    function MinimizedClicked(){
        props.onMinimized(props.id);
    }

    function bringToFront(){
        changeZIndex("z-50");
    }

    return(
        <Draggable nodeRef={nodeRef}
            allowAnyClick="false"
            handle=".handler"
            axis="both"
            defaultPosition={{x: 500, y: -300}}
        >
            <div ref={nodeRef} className="handler" >
                <div className={[`${zIndex} border-10 border-green-700 rounded-2xl select-none ${isActive ? 'visible' : 'hidden'} 
                    ${minimized ? 'hidden ' : 'animate-fade-up animate-once animate-duration-100 animate-ease-in animate-normal visible'} absolute ${width} ${height} overflow-y-clip`]}
                      onClick={() => {bringToFront()}}  >
                    <TopBar 
                        icon= {props.icon}
                        name= {props.name}
                        id= {props.id}
                        onClose={close}
                        onMinimize={MinimizedClicked}
                    />
                    {apps[props.id - 1]}
                </div> 
            </div>
        </Draggable>


    )
}

export default Window;