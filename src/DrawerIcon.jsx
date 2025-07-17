import React from "react";

function DrawerIcon(props){
    return(
        <div className="flex flex-nowrap justify-between place-items-center">
           <div className="w-[100%] border-5 border-double border-gray-500 bg-gray-700/80 active:bg-gray-700/100 rounded-full flex flex-nowrap justify-around p-5 z-40 gap-5"
            onClick={() => (props.open(props.id))}>
                <img src={props.icon} className="size-[50px]"></img>
                <span className="text-2xl text-white text-center">{props.name}</span>
            </div>
            <button className="z-50" onClick={() => (props.close(props.id))}>❎</button>
        </div>
        
    )
}

export default DrawerIcon;