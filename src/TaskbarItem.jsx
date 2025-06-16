import React from "react";

function TaskBarItem(props){
    return(
        <div className="fixed bottom-0 h-[5%] z-1 border-5 border-double px-5 flex flex-nowrap gap-3 bg-gray-300 rounded-2xl">
            <img src={props.icon} className="size-5 self-center"/>
            <h2 className="place-self-center">{props.name}</h2>
        </div>
    )
}

export default TaskBarItem;