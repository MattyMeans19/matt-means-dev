import React from "react";
import TaskBar from "./TaskBar";
import Desktop from "./Desktop";


function Home(){
    return(
        <div>
            <div className="p-5">
                <Desktop />   
            </div>
            
            <div className="pb-[5%]">
                <TaskBar />
            </div>            
        </div>

        
    )
}

export default Home;