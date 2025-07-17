import React, {useState, useEffect} from "react";
import { apps } from "./Apps";
import MobileIcons from "./MobileIcons";
import MobileWindow from "./MobileWindow";
import HomeIcon from "/icons8-circle-48.png"
import MenuIcon from "/icons8-menu-50.png"


function MobileView(){
    const icons = apps;
    const [time, ChangeTime] = useState();
    const month = new Date().getMonth();
    const day = new Date().getDate();
    const year = new Date().getFullYear();

    const [windows, updateWindows] = useState([]);


    useEffect(() =>{
        var TimeCount = setInterval(() => {ChangeTime(new Date().toLocaleTimeString())}, 1000)
        return () => clearInterval(TimeCount);
    }, [])

    const openApp = (id) => {
        let index = id - 1;
        const newWindows = [...windows];
        const openWindows = windows.filter( window => window.id === id);

        if(openWindows.length === 0){
            newWindows.push(apps[index]);
            updateWindows(newWindows);
        }

    };

        const homeClicked = () => {
        const newWindows = [...windows];

            for(let i = 0; i < newWindows.length; i++){
                console.log(i)
                newWindows[i] = { ...newWindows[i], minimized: true };
                updateWindows(newWindows);
                }

    }; 


    return(
        <div className="w-screen h-screen flex flex-col">
            <div className="w-[100vw] p-1 syscolor flex flex-nowrap justify-between">
                <span className="bg-gray-200/25 px-1 rounded-full">{month}/{day}/{year}</span>
                <span className="bg-gray-200/25 px-1 rounded-full">{time}</span>
            </div>
            
            <div className="grow grid grid-cols-4 p-1 gap-15 mt-10">
                {icons.map((icon) =>
                <MobileIcons 
                    key= {icon.id}
                    name= {icon.name}
                    icon= {icon.icon}
                    id= {icon.id}
                    openApp ={openApp}
                />
                )}
            </div>

            {windows.map((app) =>
                <MobileWindow 
                    key= {app.id}
                    id= {app.id}
                />
            )}

            <div className="flex flex-nowrap justify-around bg-gray-300/30">
                <button className="active:bg-gray-300 px=1">
                    <img src={MenuIcon}></img>
                </button>
                <button className="active:bg-gray-300 px=1" onClick={() => (homeClicked())}>
                    <img src={HomeIcon}></img>
                </button>
            </div>
        </div>
        
    )
}

export default MobileView;