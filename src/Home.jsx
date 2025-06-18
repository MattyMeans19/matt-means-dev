import React, {useState} from "react";
import TaskBar from "./TaskBar";
import Desktop from "./Desktop";
import Window from "./Window";
import {apps} from "./Apps";

function Home(){
    const [allApps] = useState(apps);

    return(
        <div className="h-screen w-screen flex flex-nowrap">
            <div className="flex flex-wrap p-5 max-h-screen">
                <Desktop 
                    apps = {allApps}
                />
            </div>

            <div className="w-full">
                {allApps.map((app, index) =>(
                    <Window 
                        key = {index}
                        name = {app.name}
                        icon = {app.icon}
                        visibility = {app.visibility}
                        content = {app.content}
                        index = {app.index - 1}
                        height = {app.height}
                        width = {app.width}
                    />
                ))}                
            </div>

            
            <div className="pb-[5%]">
                <TaskBar />
            </div>
        </div>

        
    )
}

export default Home;