import React, {useState, useEffect} from "react";
import CMDicon from "/icons8-command-64.png";
import TopBar from "./TopBar";

function Welcome(){
    const [isActive, ToggleActive] = useState(true);
    const [minimized, ToggleMinimized] = useState(false);


    function close(){
        ToggleActive(false);
    }

    function MinimizedClicked(){
        ToggleMinimized(!minimized);
    }


    return(
        <div className={[`border-10 border-green-700 rounded-2xl col-start-3 col-span-3 row-start-1 mt-[10%] ${isActive ? 'visible' : 'hidden'} 
        ${minimized ? 'absolute bottom-0 h-[5%] z-1 w-[15%] ml-[7%] ' : 'animate-fade-up animate-once animate-duration-100 animate-ease-in animate-normal visible'}`]}>
            <TopBar 
                icon= {CMDicon}
                name= "Welcome!"
                onClose={close}
                onMinimize={MinimizedClicked}
            />
            <div className="py-20 px-15 bg-black text-white flex flex-col gap-15 text-4xl jersey-10-regular">
                <span>Hello!</span>
                <span>Thanks for visiting my webpage. Click on an icon to see any relevant information!</span>
                <span>I had a lot of fun building the webpage, and I hope you have as much fun exploring it!</span>
            </div>       
        </div>

    )
}

export default Welcome;