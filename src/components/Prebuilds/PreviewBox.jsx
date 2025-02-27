import React, {useState} from "react";

function PreviewBox(props){

    const views= ["noPreview" ,"preview1Page", "preview2Page", "preview3Page"]

    return(
        <div class="border-double border-10 border-gray-600 col-span-4 bg-white grid grid-rows-6 gap-5">
            <h2 class="text-[1.5rem] text-center underline row-span-1">Preview</h2>
            <p class={`row-span-5 border-double border-5 p-5 m-2 text-center text-[4rem] ${props.fontColor}`}>{views[props.view]}</p>
        </div>
    )
}

export default PreviewBox;