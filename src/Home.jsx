import React, {useState} from "react";
import Desktop from "./Desktop";
import Window from "./Window";

function Home(){


    return(
        <div className="max-h-screen max-w-screen">
            <div className="flex flex-wrap max-h-screen">
                <Desktop />
            </div>               
        </div>

        
    )
}

export default Home;