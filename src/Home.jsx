import React from "react";
import TaskBar from "./TaskBar";
import Desktop from "./Desktop";
import Welcome from "./Welcome";

function Home(){
    return(
        <div className="grid grid-cols-6">
            <Welcome />

            <div className="p-5 col-start-1 col-span-full row-start-1">
                <Desktop />   
            </div>
            
            <div className="pb-[5%] col-span-full">
                <TaskBar />
            </div>
        </div>

        
    )
}

export default Home;