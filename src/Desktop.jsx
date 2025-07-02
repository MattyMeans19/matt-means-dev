import React, {useState} from "react";
import DocIcon from "/icons8-document-69.png";
import SkillsIcon from "/icons8-skills-64.png";
import PortfolioIcon from "/icons8-portfolio-32.png";
import CMDIcon from "/icons8-command-64.png";
import Icon from "./Icon";
import Window from "./Window";
import TaskBar from "./TaskBar";
import TaskBarItem from "./TaskbarItem";



function Desktop(){
    const [apps, appUpdate] = useState([
        {
            name: "Welcome",
            icon: CMDIcon,
            visibility: true,
            minimized: false,
            id: 1, 
            height: "h-[600px]",
            width: "w-[600px]",
            isFocus: true        
        },
        {
            name: "About Me",
            icon: DocIcon,
            minimized: false,
            id: 2, 
            height: "h-[500px]",
            width: "w-[800px]",
            isFocus: false        
        },
        {
            name: "Skills",
            icon: SkillsIcon,
            minimized: false,
            id: 3, 
            height: "h-[800px]",
            width: "w-[1000px]",
            isFocus: false        
        },
        {
            name: "Portfolio",
            icon: PortfolioIcon,
            minimized: false,
            id: 4, 
            height: "h-[800px]",
            width: "w-[1200px]",
            isFocus: false        
        }
    ])

    const [windows, updateWindows] = useState([apps[0]])

    const [menuActive, changeMenuActive] = useState(false);

    const openApp = (id) => {
        let index = id - 1;
        const newWindows = [...windows];
        const openWindows = windows.filter( window => window.id === id);

        if(openWindows.length === 0){
            newWindows.push(apps[index]);
            updateWindows(newWindows);
            console.log(newWindows)
        }

        bringToFront(id)
    }; 
    
    const closeApp = (id) => {
        const newWindows = [...windows]
        const windowIndex = newWindows.findIndex(window => window.id === id);

        if (windowIndex > -1){
            newWindows.splice(windowIndex, 1);
            updateWindows(newWindows);
        }

    }; 

    const maximizeApp = (id) => {
        const newWindows = [...windows];
        const windowIndex = newWindows.findIndex(window => window.id === id);

        if (windowIndex !== -1) {
        newWindows[windowIndex] = { ...newWindows[windowIndex], minimized: false };
        updateWindows(newWindows);
        }
    }; 

    const minimizeApp = (id) => {
        const newWindows = [...windows];
        const windowIndex = newWindows.findIndex(window => window.id === id);

        if (windowIndex !== -1) {
        newWindows[windowIndex] = { ...newWindows[windowIndex], minimized: true };
        updateWindows(newWindows);
        }
    }; 

    const bringToFront = (id) => {
        console.log("here")
        updateWindows( prevWindow =>
            prevWindow.map((window) => 
                (window.id === id ? {...window, isFocus: true } : {...window, isFocus: false})
            )
        );
    };

    function menuView(){
        changeMenuActive(!menuActive);
    }

    return(
        <div className="h-screen w-screen self-start overflow-clip absolute z-30 desktop1">

            <div className={[`border-10 border-green-700 bg-gray-200 rounded-t-4xl w-[15%] absolute z-30 bottom-12 h-[60%] ${menuActive ? 'visible animate-fade-up animate-once animate-duration-500 animate-ease-linear' : 'hidden'} flex flex-col gap-15 p-10`]}>
                <button className="w-full text-start text-2xl active:bg-gray-400 rounded-full p-5">⚙️ Settings</button>
                <button className="w-full text-start text-2xl active:bg-gray-400 rounded-full p-5">🕹️ Games</button>
                <button className="w-full text-start text-2xl active:bg-gray-400 rounded-full p-5">📁 Templates</button>
            </div>

            <div className="absolute left-5 basis-1/3 flex flex-col place-items-start gap-5 max-h-screen">
                {apps.map((app, index) =>(
                    <Icon 
                        key = {index}
                        name = {app.name}
                        icon = {app.icon}
                        id = {app.id}
                        onOpen={openApp}
                    />
                ))}
            </div>
            
            <div className="absolute z-30">
              {windows.map((app, index) =>(
                <Window 
                    key = {index}
                    name = {app.name}
                    icon = {app.icon}
                    minimized= {app.minimized}
                    id = {app.id}
                    height = {app.height}
                    width = {app.width}
                    focus = {app.isFocus}
                    close = {closeApp}
                    onMinimized={minimizeApp}
                    clicked = {bringToFront}
                />
            ))}   
            </div>
            
            <div className="pb-[5%] fixed z-40">
                     <TaskBar 
                     menuActive = {menuView}
                     />
            </div>

            <div className="fixed bottom-0 right-[10%] h-[4.65%] w-[85%] z-50">
                <div className="flex flex-nowrap gap-1 max-h-[100%]">
                    {windows.map((window, index) =>(
                        <TaskBarItem 
                            key = {index}
                            name = {window.name}
                            icon = {window.icon}
                            minimized= {window.minimized}
                            id = {window.id}
                            maximize= {maximizeApp}
                            focus= {bringToFront}
                            close = {closeApp}
                        />
                ))}
                </div>
            </div>
        
        </div>
    )
}

export default Desktop;