import React, {useState} from "react";

function Portfolio(){
    const [viewArray] = useState([
        {
            id: 1, 
            name: "Site 1",
            url: "URL for site...",
            image: "🖼️",
            description: "Site Description will go here!"
        },
        {
            id: 2, 
            name: "Site 2",
            url: "URL for site...",
            image: "🖼️",
            description: "Site Description will go here!"
        },
        {
            id: 3, 
            name: "Site 3",
            url: "URL for site...",
            image: "🖼️",
            description: "Site Description will go here!"
        }
        
    ]);
    const [currentView, changeView] = useState(0);

    function nextView(){
        if(currentView !== (viewArray.length - 1)){
            changeView(currentView + 1);
        }
    }

        function prevView(){
        if(currentView !== 0){
            changeView(currentView - 1);
        }
    }

    return(
        <div className="border-3 border-gray-400 bg-gray-900 size-full flex flex-nowrap gap-10 justify-between place-items-center p-5">
            <button className="size-10 active:bg-blue-600" onClick={() => (prevView())}>◀️</button>
            <div className="basis-full h-full border-5 border-double rounded-4xl flex flex-col gap-30 p-10 bg-cyan-500">
                <h1 className="text-center text-5xl underline">{viewArray[currentView].name}</h1>
                <h2 className="text-center text-2xl">{viewArray[currentView].url}</h2>
                <span className="text-center">{viewArray[currentView].image}</span>
                <span className="text-start text-3xl">{viewArray[currentView].description}</span>
            </div>
            <button className="size-10 active:bg-blue-600" onClick={() => (nextView())}>▶️</button>
        </div>
    )
}

export default Portfolio;