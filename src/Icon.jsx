import React from "react";
import { OpenApp } from "./Apps";

function Icon(props){
    return(
        <div className="flex flex-col" onClick={() =>(OpenApp(props.index))}>
            <img src={props.icon} className="size-[64px] self-center"></img>
            <span className="text-center passion-one-regular text-2xl">{props.name}</span>
        </div>
    )
}

export default Icon;