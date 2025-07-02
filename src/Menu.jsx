import React from "react";

function Menu(props){
    return(
        <div id="menu" className={[`border-10 border-green-700 bg-gray-200 rounded-t-4xl w-[15%] absolute z-30 bottom-12 h-[60%] ${props.active ? 'visible animate-fade-up animate-once animate-duration-250 animate-ease-linear' : 'hidden'} flex flex-col gap-10 py-10`]}>
            <button className="w-full text-start text-2xl active:bg-gray-400 rounded-full p-5">⚙️ Settings</button>
            <button className="w-full text-start text-2xl active:bg-gray-400 rounded-full p-5">🕹️ Games</button>
            <button className="w-full text-start text-2xl active:bg-gray-400 rounded-full p-5">📁 Templates</button>
        </div>
    )
}

export default Menu;