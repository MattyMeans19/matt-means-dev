import React, {useState} from "react";
import { sites } from "./Sites";

export default function Portfolio(){
    const [currentView, changeView] = useState(0);
    const [animation, applyAnimation] = useState("");

    function nextView(){
        applyAnimation("carouselNext")
        setTimeout(() =>{
            changeView(currentView + 1);
            applyAnimation("fadeLeft")
        }, 500)
    }

        function prevView(){
        applyAnimation("carouselPrev")
        setTimeout(() =>{
            changeView(currentView - 1);
            applyAnimation("fadeRight")
        }, 500)
    }

    return(
        <div className="grow md:w-[90vw] md:mx-[5vw] mb-10 h-fit p-5 grid grid-cols-7 grid-row-3 bg-gray-400/30
         border rounded-b-3xl flipUp">
            <button className={`col-start-1 place-self-center bg-gray-400/20 p-2 row-start-1 rounded-full text-3xl 
            w-fit h-fit
            ${currentView === 0 ? 'hidden' : 'visible'}`} 
            onClick={() => (prevView())}>◀</button>
            <div className={`col-start-1 col-span-full row-start-2 row-span-2 flex flex-col gap-5 place-items-center ${animation}`}>
                <h1 className="text-center text-3xl underline bg-white/30 rounded-3xl p-2">{sites[currentView].name}</h1>
                <a href={sites[currentView].url} target="_blank" className="text-center md:text-2xl w-fit
                 text-blue-600">{sites[currentView].url}</a>
                <p className="text-center p-2 rounded-2xl bg-white/30">{sites[currentView].description}</p>
                <img src={sites[currentView].image} className="w-[400px] h-[200px] place-self-center"/>
            </div>
            <button className={`col-start-7 place-self-center row-start-1 bg-gray-400/20 p-2 rounded-full 
            text-3xl w-fit h-fit ${currentView === (sites.length - 1) ? 'hidden' : 'visible'}`} 
            onClick={() => (nextView())}>▶</button>
        </div>
    )
}