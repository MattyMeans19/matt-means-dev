import React, {useState, useEffect, useRef} from "react";
import CMDicon from "/icons8-command-64.png";
import TopBar from "./TopBar";

function Window(props){
    const [isActive, ToggleActive] = useState(props.visibility);
    const [minimized, ToggleMinimized] = useState(false);
    const [width, changeWidth] = useState(props.width);
    const [height, changeHeight] = useState(props.height);

    function close(){
        ToggleActive(false);
    }

    function MinimizedClicked(){
        ToggleMinimized(!minimized);
    }

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const offset = useRef({ x: 0, y: 0 }); // To store initial mouse offset within the object

    const handleMouseDown = (e) => {
        setIsDragging(true);
        console.log(e);
        offset.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
        };
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
        setPosition({
            x: e.clientX - offset.current.x,
            y: e.clientY - offset.current.y,
        });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            console.log("here")
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        } else {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        }
        return () => { // Cleanup event listeners
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);


    return(
        <div className={[`border-10 border-green-700 rounded-2xl w-${width} h-${height} ${isActive ? 'visible' : 'hidden'} 
        ${minimized ? 'fixed bottom-0 h-[5%] z-1 w-[15%] ml-[5%] ' : 'animate-fade-up animate-once animate-duration-100 animate-ease-in animate-normal visible'}
        absolute left-${position.x} top-${position.y} `]}>
            <TopBar 
                icon= {CMDicon}
                name= "Welcome!"
                onClose={close}
                onMinimize={MinimizedClicked}
                onDrag={handleMouseDown}
            />
            {props.content}
        </div>

    )
}

export default Window;