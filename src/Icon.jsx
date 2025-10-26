import React from "react";

function Icon(props){
    return(
        <div className={[`flex flex-col w-full ${props.onDesktop ? 'visible' : 'hidden'} desktop`]} onClick={() =>(props.onOpen(props.id, props.onDesktop))}>
            <img src={props.icon} className="size-[64px] self-center"></img>
            <span className="text-center text-2xl">{props.name}</span>
        </div>
    )
}

export default Icon;