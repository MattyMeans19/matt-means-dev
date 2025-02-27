import React, {useState} from "react";
import PageNumber from "./PageNumber";
import PreviewBox from "./PreviewBox";
import StyleSelector from "./StyleSelector";

function TemplateSelector(){
    const [view, setView]= useState(0);
    const [fontColor, setFontColor]=useState("");

    function changeView(selction){
        setView(selction)
    }

    function setcolor(color){
        setFontColor(color)
    }

    return(
        <div class="selector-bg bg-fuchsia-200 pt-1">
        <h1 class="text-[4rem] text-center border-double border-12 border-black p-5 pt-10 m-2 w-[80vw] place-self-center bg-white">Template Selector</h1>
        <h2 class="place-self-center text-red-500">****This module itself is an example of a dynamic page!</h2>
        <div class="grid grid-cols-5 gap-3 border-5 border-gray-800 rounded-2xl p-2 w-[90vw] place-self-center bg-green-100">
            <PageNumber 
                viewChange={changeView}
            />
            <StyleSelector 
                fontColor={fontColor}
            />
            <PreviewBox 
                view={view}
            />
        </div>
    </div>
    )
}

export default TemplateSelector;