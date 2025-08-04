import React, {useState} from "react";
import { sites } from "./Sites";

function Portfolio(){
    const [currentView, changeView] = useState(0);

    function nextView(){
        if(currentView !== (sites.length - 1)){
            changeView(currentView + 1);
        }
    }

        function prevView(){
        if(currentView !== 0){
            changeView(currentView - 1);
        }
    }

    return(
        <div className="border-3 border-gray-400 bg-gray-900 size-[100%] flex flex-nowrap justify-between place-items-center md:p-5">
            <button className="size-10 active:bg-blue-600" onClick={() => (prevView())}>◀️</button>
            <div className="basis-full h-full border-5 border-double border-black rounded-4xl flex flex-col gap-5 p-10 bg-cyan-500">
                <h1 className="text-center text-5xl underline">{sites[currentView].name}</h1>
                <a href={sites[currentView].url} target="_blank" className="text-center text-2xl">{sites[currentView].url}</a>
                <img src={sites[currentView].image} className="size-full md:size-[70%] place-self-center border-10 border-double"/>
                <span className="text-center text-3xl">{sites[currentView].description}</span>
            </div>
            <button className="size-10 active:bg-blue-600" onClick={() => (nextView())}>▶️</button>
        </div>
    )
}

export default Portfolio;