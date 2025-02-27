import React from "react";
import StyleOption from "./StyleOption";

function StyleSelector(props){

    function setColor(color){
        props.fontColor(color)
    }

    return(
        <div class="border-double border-10 border-gray-600 col-start-1 col-span-1 bg-white">
            <h2 class="text-[1.5rem] text-center underline">Style Selector</h2>
            <StyleOption 
                option="Font Color"
                fontColor={setColor}
            />
        </div>
    )
}

export default StyleSelector