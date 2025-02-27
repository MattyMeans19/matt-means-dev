import React, {useState} from "react";
import NumberButton from "./NumberButton";

function PageNumber(props){
    
    const [active, setActive]=useState(0);
    const col = [ "col-start-3", "col-start-3", "col-start-4", "col-start-5",]

    function moveMarker(pages){
        setActive(pages)
        props.viewChange(pages)
    }

    return(
            <div class="border-double border-10 border-gray-600 col-span-3 col-start-2 bg-white grid grid-cols-5 p-3">
                <h2 class="text-[1.5rem] text-center col-start-1 col-span-2">Number of pages:  </h2>
                <NumberButton 
                    pageNumber= {1}
                    onClicked={moveMarker}
                />
                <NumberButton 
                    pageNumber= {2}
                    onClicked={moveMarker}
                />
                <NumberButton 
                    pageNumber= {3}
                    onClicked={moveMarker}
                />

                <div class={`border-solid border-3 border-emerald-800 col-span-1 ${col[active]} w-[50%] place-self-center`}></div>
            </div>
    )
}

export default PageNumber;