import React, {useState} from "react";
import Desktop from "./Desktop";

function Home(){
    const [background, updateBackground] = useState("circles")
    const [sysFont, updateSysFont] = useState("jersey-10-regular")

    function updateBG(newBG){
        updateBackground(newBG)
    }

    function updateFont(newFont){
        updateSysFont(newFont);
    }


    return(
        <div className="max-h-screen max-w-screen">
            <div className={[`flex flex-wrap max-h-screen text-(--textColor) ${sysFont}`]}>
                <Desktop 
                    bg = {background}
                    bgUpdate = {updateBG}
                    fontUpdate = {updateFont}
                />
            </div>               
        </div>

        
    )
}

export default Home;