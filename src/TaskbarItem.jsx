import React, {useState, useEffect} from "react";


function TaskBarItem(props){

    function Clicked(){
        if(props.minimized === true){
            props.maximize(props.id)
        } else{
            props.focus(props.id)
        }
    }
    
    return(
        <div className={[`shrink basis-1/6 border-5 border-double border-black px-2 bg-gray-300 rounded-lg pt-2 hover:bg-gray-400 overflow-x-clip h-10`]}>
            <div className="relative z-50 w-[90%] flex flex-nowrap gap-5" onClick={() =>(Clicked())}>
                <img src={props.icon} className="size-5 "/>
                <h2 className=" w-full text-nowrap hover:cursor-default">{props.name}</h2> 
            </div>

            <div className="relative right-0 bottom-2 w-full text-end -translate-y-5 z-50">
                <button className="px-1 z-20 hover:bg-gray-600 rounded-full" onClick={() => (props.close(props.id))}>x</button>  
            </div>
            
        </div>
    )
}

export default TaskBarItem;