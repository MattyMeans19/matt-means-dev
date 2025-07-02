import React, {useEffect, useState} from "react";
import Icon from "./Icon";
import Window from "./Window";
import TaskBar from "./TaskBar";
import TaskBarItem from "./TaskbarItem";
import Menu from "./Menu";
import { apps } from "./Apps";


function Desktop(){

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

    function shutMenu(){
        if(menuActive !== false){
            document.body.addEventListener('click', (event) => {
            const menu = document.getElementById('menu');

        if(event.target !== menu && !menu.contains(event.target)){
            console.log("here");
            menuView();
            }
        }, {once : true});
        }
    }



    return(
        <div className="h-screen w-screen self-start overflow-clip absolute z-30 desktop1" onClick={() => (shutMenu())}>

            <Menu 
                active = {menuActive}
            />

            <div className="absolute left-5 basis-1/3 flex flex-col place-items-start gap-5 max-h-screen">
                {apps.map((app, index) =>(
                    <Icon 
                        key = {index}
                        name = {app.name}
                        icon = {app.icon}
                        id = {app.id}
                        onDesktop = {app.onDesktop}
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