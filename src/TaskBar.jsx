import React, {useState, useEffect} from "react";
import TaskBarItem from "./TaskbarItem";

function TaskBar(props){
    const [time, ChangeTime] = useState();
    const [menuActive, changeMenuActive] = useState(false)
    const month = new Date().getMonth();
    const day = new Date().getDate();
    const year = new Date().getFullYear();

    useEffect(() =>{
        var TimeCount = setInterval(() => {ChangeTime(new Date().toLocaleTimeString())}, 1000)
        return () => clearInterval(TimeCount);
    }, [])

    function menuClicked(){
        changeMenuActive(!menuActive);
        props.menuActive()
    }

    return(
        <div className={[`flex flex-nowrap justify-between fixed bottom-0 h-[5%] w-screen syscolor rounded-t-sm`]}>
            <button className={[`bg-white w-[5%] rounded-t-sm hover:opacity-85 ${menuActive ? 'opacity-100' : 'opacity-50'} passion-one-regular text-2xl`]}
            onClick={() =>(menuClicked())}
            >Menu</button>
            <div className="w-full flex flex-nowrap">

            </div>
            <div className="flex flex-col px-5 border-l-1 border-gray-400">
                <span className="text-nowrap">{time}</span>
                <span className="place-self-start">{month + 1}/{day}/{year}</span>
            </div>
        </div>

    )
}

export default TaskBar;