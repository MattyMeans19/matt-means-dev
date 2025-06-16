import React, {useState, useEffect} from "react";
import TaskBarItem from "./TaskbarItem";

function TaskBar(){
    const [time, ChangeTime] = useState();
    const [menuActive, changeMenuActive] = useState(false)
    const [openApps, alterApps] = useState([])
    const month = new Date().getMonth();
    const day = new Date().getDate();
    const year = new Date().getFullYear();

    useEffect(() =>{
        var TimeCount = setInterval(() => {ChangeTime(new Date().toLocaleTimeString())}, 1000)
        return () => clearInterval(TimeCount);
    }, [])


    return(
        <div className="flex flex-nowrap justify-between fixed bottom-0 h-[5%] w-screen bg-emerald-800 rounded-t-sm animate-fade-up animate-once animate-duration-500 animate-ease-linear">
            <button className={[`bg-emerald-400 w-[5%] rounded-t-sm hover:opacity-85 ${menuActive ? 'opacity-100' : 'opacity-50'} passion-one-regular text-2xl`]}>Menu</button>

            <div className="flex flex-col px-10">
                <span>{time}</span>
                <span>{month + 1}/{day}/{year}</span>
            </div>
        </div>

    )
}

export default TaskBar;