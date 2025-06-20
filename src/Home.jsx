import React, {useState} from "react";
import TaskBar from "./TaskBar";
import Desktop from "./Desktop";
import Window from "./Window";

function Home(){


    return(
        <div className="h-screen w-screen overflow-hidden">
            <div className="flex flex-wrap p-5 max-h-screen">
                <Desktop />
            </div>               
            

            
            <div className="pb-[5%]">
                <TaskBar />
            </div>
        </div>

        
    )
}

export default Home;