import React, {useState} from "react";
import Desktop from "./Desktop";

function Home(){
    const [background, updateBackground] = useState("circles")
    const [sysColor, updateSysColor] = useState("#008236")

    function updateBG(newBG){
        updateBackground(newBG)
    }

    function newSysColor(newColor){
        updateSysColor( newColor);
        console.log(sysColor)
    }

    return(
        <div className="max-h-screen max-w-screen">
            <div className="flex flex-wrap max-h-screen">
                <Desktop 
                    bg = {background}
                    bgUpdate = {updateBG}
                    syscolor = {"bg-[" + sysColor + "]"}
                    borderColor = {"border-[" + sysColor + "]"}
                    updateSysColor = {newSysColor}
                />
            </div>               
        </div>

        
    )
}

export default Home;