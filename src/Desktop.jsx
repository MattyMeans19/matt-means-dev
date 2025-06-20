import React, {useState} from "react";
import DocIcon from "/icons8-document-69.png";
import SkillsIcon from "/icons8-skills-64.png";
import PortfolioIcon from "/icons8-portfolio-32.png";
import CMDIcon from "/icons8-command-64.png";
import Icon from "./Icon";
import Window from "./Window";
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
            width: "w-[600px]"
        },
        {
            name: "About Me",
            icon: DocIcon,
            visibility: false,
            minimized: false,
            id: 2, 
            height: "h-[300px]",
            width: "w-[600px]"
        },
        {
            name: "Skills",
            icon: SkillsIcon,
            visibility: false,
            minimized: false,
            id: 3, 
            height: "h-[500px]",
            width: "w-[500px]"
        },
        {
            name: "Portfolio",
            icon: PortfolioIcon,
            visibility: false,
            minimized: false,
            id: 4, 
            height: "h-[600px]",
            width: "w-[600px]"
        }
    ])

    const openApp = (index) => {
        const updatedApp = [...apps];
        const appIndex = updatedApp.findIndex(app => app.id === index);

        if (appIndex !== -1) {
        updatedApp[appIndex] = { ...updatedApp[appIndex], visibility: true };
        appUpdate(updatedApp);
        }
    }; 
    
    const closeApp = (index) => {
        const updatedApp = [...apps];
        const appIndex = updatedApp.findIndex(app => app.id === index);

        if (appIndex !== -1) {
        updatedApp[appIndex] = { ...updatedApp[appIndex], visibility: false };
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

    return(
        <div className="h-screen">

            <div className="basis-1/3 flex flex-col place-items-start gap-5 max-h-screen">
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
                    close = {closeApp}
                    onMinimized={minimizeApp}
                />
            ))} 

            <div className="fixed bottom-0 right-[10%] h-[4.65%] w-[85%] z-2">
                <div className="flex flex-nowrap gap-1">
                    {apps.map((app, index) =>(
                        <TaskBarItem 
                            key = {index}
                            name = {app.name}
                            icon = {app.icon}
                            visibility = {app.visibility}
                            minimized= {app.minimized}
                            id = {app.id}
                            maximize= {maximizeApp}
                            close = {closeApp}
                        />
                ))}
                </div>
            </div>
        
        </div>
    )
}

export default Desktop;