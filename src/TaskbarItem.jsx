import React, {useState, useEffect} from "react";


function TaskBarItem(props){
    const [isActive, ToggleActive] = useState(props.visibility);

        useEffect(() => {
            if(isActive !== props.visibility){
                ToggleActive(props.visibility);
            }
        }, [isActive, props.visibility])
    
    return(
        <div className={[`passion-one-bold basis-1/8 z-10 border-5 border-double px-2 flex flex-nowrap bg-gray-300 rounded-lg size-full pt-2 ${isActive ? 'visible' : 'hidden'} hover:bg-gray-400`]}>
            <div className="justify-self-center flex flex-nowrap gap-5" onClick={() =>(props.maximize(props.id))}>
                <img src={props.icon} className="size-5 "/>
                <h2 className=" w-full text-nowrap hover:cursor-default">{props.name}</h2> 
            </div>

            <div className="justify-self-end w-full text-end -translate-y-2">
                <button className="px-1 z-20 hover:bg-gray-600 rounded-full" onClick={() => (props.close(props.id))}>x</button>  
            </div>
            
        </div>
    )
}

export default TaskBarItem;