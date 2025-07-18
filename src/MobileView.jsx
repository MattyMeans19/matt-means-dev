import React, {useState, useEffect} from "react";
import { apps } from "./Apps";
import MobileIcons from "./MobileIcons";
import MobileWindow from "./MobileWindow";
import DrawerIcon from "./DrawerIcon";
import HomeIcon from "/icons8-circle-48.png"
import MenuIcon from "/icons8-menu-50.png"


function MobileView(props){
    const [icons, updateIcons] = useState(apps);
    const [time, ChangeTime] = useState();
    const [drawerOpen, toggleDrawer] = useState(false)
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

    const reOpenApp = (id) =>{
        const newWindows = [...windows];
        const newIcons = [...icons];
        const openWindows = windows.findIndex( window => window.id === id);
        const iconIndex = icons.findIndex(icon => icon.id === id);

        newWindows[openWindows] = { ...newWindows[openWindows], minimized: false};
        updateWindows(newWindows);
        newIcons[iconIndex] = {...newIcons[iconIndex], minimized: false};
        updateIcons(newIcons);

        if(drawerOpen === true){
            menuClicked()
        }
    }

    const closeApp = (id) => {
        const newWindows = [...windows]
        const newIcons = [...icons];
        const windowIndex = newWindows.findIndex(window => window.id === id);
        const iconIndex = icons.findIndex(icon => icon.id === id);

        if (windowIndex > -1){
            newWindows[windowIndex] = { ...newWindows[windowIndex], minimized: false};
            updateWindows(newWindows);
            newIcons[iconIndex] = {...newIcons[iconIndex], minimized: false};
            updateIcons(newIcons);
            newWindows.splice(windowIndex, 1);
            updateWindows(newWindows);
        }

    };

    const homeClicked = () => {
        const newWindows = [...windows];
        const newIcons = [...icons];

            for(let i = 0; i < newWindows.length; i++){
                newWindows[i] = { ...newWindows[i], minimized: true };
                updateWindows(newWindows);
                let iconIndex = newWindows[i].id - 1;
                newIcons[iconIndex] = {...newIcons[iconIndex], minimized: true};
                updateIcons(newIcons);
                }

            if(drawerOpen === true){
                menuClicked();
            }

    };

    function menuClicked(){
        toggleDrawer(!drawerOpen);
    }

    function updateBG(newBG){
        props.bgUpdate(newBG);
    }
    function updateFont(newFont){
        props.fontUpdate(newFont)
    }


    return(
        <div className={[`w-screen h-screen flex flex-col ${props.bg}`]}>
            <div className="w-[100vw] p-1 syscolor flex flex-nowrap justify-between">
                <span className="bg-gray-200/25 px-1 rounded-full">{month}/{day}/{year}</span>
                <span className="bg-gray-200/25 px-1 rounded-full">{time}</span>
            </div>
            
            <div className="grow relative">
                <div className="absolute grid grid-cols-4 p-1 gap-15 z-40 mt-5">
                    {icons.map((icon, index) =>
                    <MobileIcons 
                        key= {index}
                        name= {icon.name}
                        icon= {icon.icon}
                        id= {icon.id}
                        minimized= {icon.minimized}
                        openApp= {openApp}
                        reOpen= {reOpenApp}
                    />
                    )}
                </div>
                <div className="absolute w-[100%] h-[100%] overflow-y-scroll">
                   {windows.map((app, index) =>
                    <MobileWindow 
                        key= {index}
                        id= {app.id}
                        minimized = {app.minimized}
                        bgUpdate = {updateBG}
                        fontUpdate = {updateFont}
                    />
                    )} 
                </div>
                 
            
                <div className={[`${drawerOpen ? "visible z-50" : "hidden z-10"} bg-black/75 absolute top-0 h-[100%] w-[100%] flex flex-col gap-3 px-2 pt-2`]}>
                    {windows.map((app, index) =>(
                        <DrawerIcon 
                            key= {index}
                            id= {app.id}
                            icon= {app.icon}
                            name= {app.name}
                            close= {closeApp}
                            open= {reOpenApp}
                        />
                    ))}
                    <span className="text-center text-white">Press the drawer button again to hide this!</span>
                </div>
            </div>
            <div className="flex flex-nowrap justify-around bg-gray-300/30 z-50">
                <button className="active:bg-gray-300 px=1" onClick={() => (menuClicked())}>
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