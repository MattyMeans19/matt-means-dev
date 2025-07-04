import React, {useState} from "react";
import Desktop from "./Desktop";

function Home(){
    const [background, updateBackground] = useState("circles")

    function updateBG(newBG){
        updateBackground(newBG)
    }


    return(
        <div className="max-h-screen max-w-screen">
            <div className="flex flex-wrap max-h-screen text-(--textColor)">
                <Desktop 
                    bg = {background}
                    bgUpdate = {updateBG}

                />
            </div>               
        </div>

        
    )
}

export default Home;