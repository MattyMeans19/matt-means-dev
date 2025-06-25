import React, {useState, useEffect, useRef} from "react";
import TopBar from "./TopBar";
import Draggable, {DraggableCore} from "react-draggable";
import Welcome from "./Welcome";

function Window(props){
    const [isActive, ToggleActive] = useState(props.visibility);
    const [minimized, ToggleMinimized] = useState(props.minimized);
    const [focused, updateFocused] = useState(props.focus);
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
        if(focused !== props.focus){
            updateFocused(props.focus);
        }
    }, [isActive, props.visibility, minimized, props.minimized, focused, props.focus])


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

    return(         
        <Draggable nodeRef={nodeRef}
            allowAnyClick="false"
            handle=".handler"
            axis="both"
            defaultPosition={{x: 500, y: 0}}
        >
            <div ref={nodeRef} className="handler" onClick={() => (bringToFront())}>
                <div className={[`border-10 border-green-700 rounded-t-2xl select-none ${isActive ? 'visible' : 'hidden'} 
                    ${minimized ? 'hidden ' : 'animate-fade-up animate-once animate-duration-100 animate-ease-in animate-normal visible'} ${width}`]}>
                   <TopBar 
                        icon= {props.icon}
                        name= {props.name}
                        id= {props.id}
                        onClose={close}
                        onMinimize={MinimizedClicked}
                    /> 
                </div>    
                <div className={[`border-10 border-green-700 rounded-b-2xl select-none ${isActive ? 'visible' : 'hidden'} 
                    ${minimized ? 'hidden ' : 'animate-fade-up animate-once animate-duration-100 animate-ease-in animate-normal visible'} absolute ${width} ${height} overflow-y-clip
                    ${focused ? 'z-20' : 'z-10'}`]}>  
                    {apps[props.id - 1]}  
                </div> 
            </div>
        </Draggable>

    )
}

export default Window;