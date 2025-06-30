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
            visibility: false,
            minimized: false,
            id: 2, 
            height: "h-[500px]",
            width: "w-[800px]",
            isFocus: false        
        },
        {
            name: "Skills",
            icon: SkillsIcon,
            visibility: false,
            minimized: false,
            id: 3, 
            height: "h-[800px]",
            width: "w-[1000px]",
            isFocus: false        
        },
        {
            name: "Portfolio",
            icon: PortfolioIcon,
            visibility: false,
            minimized: false,
            id: 4, 
            height: "h-[800px]",
            width: "w-[1200px]",
            isFocus: false        
        }
    ])

    const openApp = (index) => {
        const updatedApp = [...apps];
        const appIndex = updatedApp.findIndex(app => app.id === index);

        if (appIndex !== -1) {
        updatedApp[appIndex] = { ...updatedApp[appIndex], visibility: true};
        appUpdate(updatedApp);
        }
        bringToFront(index)
    }; 
    
    const closeApp = (index) => {
        const updatedApp = [...apps];
        const appIndex = updatedApp.findIndex(app => app.id === index);

        if (appIndex !== -1) {
        updatedApp[appIndex] = { ...updatedApp[appIndex], visibility: false, minimized:false, isFocus: false};
        appUpdate(updatedApp);
        }
    }; 

    const maximizeApp = (index) => {
        const updatedApp = [...apps];
        const appIndex = updatedApp.findIndex(app => app.id === index);

        if (appIndex !== -1) {
        updatedApp[appIndex] = { ...updatedApp[appIndex], minimized: false };
        appUpdate(updatedApp);
        }
    }; 

    const minimizeApp = (index) => {
        const updatedApp = [...apps];
        const appIndex = updatedApp.findIndex(app => app.id === index);

        if (appIndex !== -1) {
        updatedApp[appIndex] = { ...updatedApp[appIndex], minimized: true };
        appUpdate(updatedApp);
        }
    }; 

    const bringToFront = (index) => {
        console.log("here")
        appUpdate( prevApp =>
            prevApp.map((app) => 
                (app.id === index ? {...app, isFocus: true } : {...app, isFocus: false})
            )
        );
    };

    return(
        <div className="h-screen w-screen self-start overflow-clip absolute z-30 desktop1">

            <div className="absolute left-5 basis-1/3 flex flex-col place-items-start gap-5 max-h-screen">
                {apps.map((app, index) =>(
                    <Icon 
                        key = {index}
                        name = {app.name}
                        icon = {app.icon}
                        visibility = {app.visibility}
                        id = {app.id}
                        onOpen={openApp}
                    />
                ))}
            </div>
            
            <div className="absolute z-30">
              {apps.map((app, index) =>(
                <Window 
                    key = {index}
                    name = {app.name}
                    icon = {app.icon}
                    visibility = {app.visibility}
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
                     <TaskBar />
            </div>

            <div className="fixed bottom-0 right-[10%] h-[4.65%] w-[85%] z-50">
                <div className="flex flex-nowrap gap-1 max-h-[100%]">
                    {apps.map((app, index) =>(
                        <TaskBarItem 
                            key = {index}
                            name = {app.name}
                            icon = {app.icon}
                            visibility = {app.visibility}
                            minimized= {app.minimized}
                            id = {app.id}
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