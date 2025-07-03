import React, {useState} from "react";
import { backgrounds } from "./Backgrounds";
import BackgroundTile from "./BackgroundTile";


function Settings(props){
    const [sysColor, updateSysColor] = useState("#008236")
    const [txtColor, updateTXTColor] = useState("#0c0a09")

    function updateBG(newBG){
        props.bgUpdate(newBG);
    }

    function newSysColor(){
        let newColor = document.getElementById("systemColor").value;
        updateSysColor(newColor);
        props.changeSysColor(newColor);
    }

        function newTxtColor(){
        let newColor = document.getElementById("textColor").value;
        updateTXTColor(newColor);
    }

    return(
        <div className="size-full border-2 border-black bg-white">
            <div className="flex flex-nowrap justify-around px-10 pb-1 gap-10 h-[10%] place-items-end border-b-10 border-solid border-black rounded-2xl ">
                <button className="text-center basis-full bg-gray-200 hover:bg-gray-400 active:bg-gray-600 rounded-full">Background</button>
                <button className="text-center basis-full bg-gray-200 hover:bg-gray-400 active:bg-gray-600 rounded-full">Color</button>
                <button className="text-center basis-full bg-gray-200 hover:bg-gray-400 active:bg-gray-600 rounded-full">Font</button>
            </div>
            <div className="size-full p-15 flex flex-wrap gap-10 justify-around hidden">
                {backgrounds.map((background) => (
                    <BackgroundTile 
                        key = {background.id}
                        name = {background.name}
                        image = {background.image}
                        bgUpdate = {updateBG}
                    />
                ))}
            </div>

            <div className=" p-15 size-full flex flex-col gap-20">
                <div className="flex flex-nowrap gap-15 place-items-center">
                    <input type="color" id="systemColor" value={sysColor} className="size-[200px] border-5 border-black" onInput={() => (newSysColor())}/>
                    <h1 className="text-3xl text-center">System Color: Taskbar and Window Borders</h1>  
                </div>
                <div className="flex flex-nowrap gap-15 place-items-center">
                    <input type="color" id="textColor" value={txtColor} className="size-[200px] border-5 border-black" onInput={() => (newTxtColor())}/>
                    <h1 className="text-3xl text-center">Font Color: All Text Color</h1>  
                </div>
            </div>
        </div>
    )
}

export default Settings;