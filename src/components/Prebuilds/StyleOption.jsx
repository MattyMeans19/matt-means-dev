import React from "react";
import ColorSelector from "./ColorSelector";

function StyleOption(props){

    function setColor(color){
        props.fontColor(color)
    }

    return(
        <div class="px-5 mt-5 border-solid border-2 w-[90%] place-self-center grid grid-cols-6">
            <h3 class="col-span-6 tracking-[1em] text-center underline">{props.option}</h3>
            <ColorSelector
                color={setColor}
            />
        </div>
    )
}

export default StyleOption;