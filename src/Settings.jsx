import React from "react";
import { backgrounds } from "./Backgrounds";
import BackgroundTile from "./BackgroundTile";


function Settings(){
    return(
        <div className="size-full border-2 bg-white">
            <div className="flex flex-nowrap justify-around px-10 pb-1 gap-10 h-[10%] place-items-end border-b-10 border-solid rounded-2xl ">
                <button className="text-center basis-full bg-gray-200 hover:bg-gray-400 active:bg-gray-600 rounded-full">Background</button>
                <button className="text-center basis-full bg-gray-200 hover:bg-gray-400 active:bg-gray-600 rounded-full">Color</button>
                <button className="text-center basis-full bg-gray-200 hover:bg-gray-400 active:bg-gray-600 rounded-full">Font</button>
            </div>
            <div className="size-full p-15 flex flex-wrap gap-10 justify-around">
                {backgrounds.map((background) => (
                    <BackgroundTile 
                        key = {background.id}
                        name = {background.name}
                        image = {background.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default Settings;