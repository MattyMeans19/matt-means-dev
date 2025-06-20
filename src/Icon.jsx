import React from "react";

function Icon(props){
    return(
        <div className="flex flex-col w-full" onClick={() =>(props.onOpen(props.id))}>
            <img src={props.icon} className="size-[64px] self-center"></img>
            <span className="text-center passion-one-regular text-2xl">{props.name}</span>
        </div>
    )
}

export default Icon;