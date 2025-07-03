import React, {useEffect, useState} from "react";

function TopBar(props){



    return(
        <div className={[`grid grid-cols-15 gap-2 relative z-21 ${props.color}`]}>
            <img src={props.icon} className="size-10 col-start-1"></img>
            <h1 className="self-center ml-5 text-2xl text-nowrap">{props.name}</h1>
            <span className="col-start-3 col-span-11 w-full cursor-grab z-1"></span>
            <button className="self-start col-start-14 border-2 border-black m-1 rounded-full bg-yellow-300 hover:bg-yellow-500 w-full z-40" onClick={() => (props.onMinimize())}>-</button>
            <button className="self-start col-start-15 border-2 border-black m-1 rounded-full bg-red-300 hover:bg-red-500 w-full z-40" onClick={() => (props.onClose(props.id))}>X</button>
        </div>
    )
}

export default TopBar;