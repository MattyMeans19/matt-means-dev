import React from "react";

function MobileIcons(props){
    return(
        <div className="place-items-center flex flex-col max-w-[100px]"
        onClick={() => (props.openApp(props.id))}>
            <img src={props.icon} className="size-15 p-1 border-5 rounded-xl syscolor-Border bg-(--sysColor)/50  active:bg-(--sysColor)"/>
            <h2 className="text-center">{props.name}</h2>
        </div>
    )
}

export default MobileIcons;