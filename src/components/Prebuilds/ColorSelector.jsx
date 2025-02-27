import React from "react";

function ColorSelector(props){


    return(
        <div class="grid grid-cols-6 grid-rows-3 col-span-6 justify-evenly gap-3">
            <button class="border-double border-3 col-span-1 row-span-3 bg-red-500" onClick={() =>{
                props.color("text-red-500")
            }}></button>
            <button class="border-double border-3 col-span-1 row-span-3 bg-emerald-500"></button>
            <button class="border-double border-3 col-span-1 row-span-3 bg-blue-500"></button>
            <button class="border-double border-3 col-span-1 row-span-3 bg-purple-500"></button>
            <button class="border-double border-3 col-span-1 row-span-3 bg-orange-500"></button>
            <button class="border-double border-3 col-span-1 row-span-3 bg-black"></button>
        </div>
    )
}

export default ColorSelector;