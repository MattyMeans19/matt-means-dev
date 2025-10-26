import React, {useEffect, useState} from "react";
import Icon from "./Icon";
import Window from "./Window";
import TaskBar from "./TaskBar";
import TaskBarItem from "./TaskbarItem";
import Menu from "./Menu";
import { apps } from "./Apps";


function Desktop(props){

    const [windows, updateWindows] = useState([apps[0]])

    const [menuActive, changeMenuActive] = useState(false);

    const openApp = (id, onDesktop) => {
        let index = id - 1;
        const newWindows = [...windows];
        const openWindows = windows.filter( window => window.id === id);

        if(openWindows.length === 0){
            newWindows.push(apps[index]);
            updateWindows(newWindows);
        }

        if(!onDesktop){
            menuView();
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
            menuView();
            }
        }, {once : true});
        }
    }

    function updateBG(newBG){
        props.bgUpdate(newBG);
    }
    function updateFont(newFont){
        props.fontUpdate(newFont);
    }



    return(
        <div className={[`h-screen w-screen self-start overflow-clip absolute left-0 top-0 z-30 ${props.bg}`]} onClick={() => (shutMenu())}>

            <Menu 
                active = {menuActive}
                open = {openApp}
            />

            <div className="absolute left-5 basis-1/3 flex flex-col place-items-start gap-5 mb-[10%] max-h-screen">
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
            
            <div className="absolute lg:-left-[33%] 2xl:-left-[26%] z-30">
              {windows.map((app) =>(
                <Window 
                    key = {app.id}
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
                    bgUpdate = {updateBG}
                    fontUpdate = {updateFont}
                />
            ))}   
            </div>
            
            <div className="pb-[5%] fixed z-40">
                     <TaskBar 
                     menuActive = {menuView}
                     active = {menuActive}
                     />
            </div>

            <div className="fixed bottom-0 2xl:bottom-2 right-[10%] w-[85%] z-50">
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