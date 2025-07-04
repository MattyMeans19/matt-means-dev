import React, {useState} from "react";
import { backgrounds } from "./Backgrounds";
import BackgroundTile from "./BackgroundTile";
import { fontStyle } from "./Fonts";
import FontTiles from "./FontTiles";


function Settings(props){
    const [sysColor, updateSysColor] = useState('#008236')
    const [txtColor, updateTXTColor] = useState('#0a0a0a')
    const [view, changeView] = useState(1)

    function updateBG(newBG){
        props.bgUpdate(newBG);
    }

    function updateFont(newFont){
        props.fontUpdate(newFont);
    }

    function newSysColor(){
        let newColor = document.getElementById("systemColor").value;
        updateSysColor(newColor);
        document.documentElement.style.setProperty('--sysColor', newColor);
    }

    function newTxtColor(){
        let newColor = document.getElementById("textColor").value;
        updateTXTColor(newColor);
        document.documentElement.style.setProperty('--textColor', newColor);
    }

    function newView(view){
        changeView(view);
    }

    return(
        <div className="size-full border-2 border-black bg-white">
            <div className="flex flex-nowrap justify-around px-10 pb-1 gap-10 h-[10%] place-items-end border-b-10 border-solid border-black rounded-2xl ">
                <button className="text-center basis-full bg-gray-200 hover:bg-gray-400 active:bg-gray-600 rounded-full" onClick={() => (newView(1))}>Background</button>
                <button className="text-center basis-full bg-gray-200 hover:bg-gray-400 active:bg-gray-600 rounded-full" onClick={() => (newView(2))}>Color</button>
                <button className="text-center basis-full bg-gray-200 hover:bg-gray-400 active:bg-gray-600 rounded-full" onClick={() => (newView(3))}>Font</button>
            </div>
            <div className={[`size-full p-15 flex flex-wrap gap-10 justify-around ${view === 1 ? 'visible' : 'hidden'}`]}>
                {backgrounds.map((background) => (
                    <BackgroundTile 
                        key = {background.id}
                        name = {background.name}
                        image = {background.image}
                        bgUpdate = {updateBG}
                    />
                ))}
            </div>

            <div className={[`p-15 size-full flex flex-col gap-20 ${view === 2 ? 'visible' : 'hidden'}`]}>
                <div className="flex flex-nowrap gap-15 place-items-center">
                    <input type="color" id="systemColor" value={sysColor} className="size-[200px] border-5 border-black" onInput={() => (newSysColor())}/>
                    <h1 className="text-3xl text-center">System Color: Taskbar and Window Borders</h1>  
                </div>
                <div className="flex flex-nowrap gap-15 place-items-center">
                    <input type="color" id="textColor" value={txtColor} className="size-[200px] border-5 border-black" onInput={() => (newTxtColor())}/>
                    <h1 className="text-3xl text-center">Font Color: All Text Color</h1>  
                </div>
            </div>

            <div className={[`flex flex-wrap justify-around gap-10 p-10 ${view === 3 ? 'visible' : 'hidden'}`]}>
                {fontStyle.map((font) =>(
                    <FontTiles 
                        key = {font.id}
                        name = {font.name}
                        class = {font.class}
                        fontUpdate = {updateFont}
                    />
                ))}
            </div>
        </div>
    )
}

export default Settings;