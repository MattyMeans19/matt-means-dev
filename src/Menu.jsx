import React, {useState} from "react";
import MediaIcon from "/icons8-media-player-64.png";
import PinballIcon from "/icons8-pinball-64.png";
import GamesIcon from "/icons8-games-100.png";

function Menu(props){
    const [gamesView, changeGamesView] = useState(false);
    const [templatesView, changeTemplatesView] = useState(false);

    function Games(){
        changeGamesView(!gamesView);
    }

    function Templates(){
        changeTemplatesView(!templatesView);
    }


    return(
        <div id="menu" className={[`border-10 syscolor-Border bg-gray-200 rounded-t-2xl w-[15%] absolute z-50 bottom-10 h-[60%] ${props.active ? 'visible animate-fade-up animate-once animate-duration-250 animate-ease-linear' : 'hidden'} flex flex-col gap-10 py-10 overflow-y-scroll`]}>
            <button className="w-full text-start text-2xl active:bg-gray-400 rounded-full p-5" onClick={() => (props.open(5))}>⚙️ Settings</button>
            <div>
                <button className="w-full text-start text-2xl active:bg-gray-400 rounded-full p-5" onClick={() => (Games())}>🕹️ Games</button>
                <ul className={[`pl-5 text-[1rem] ${gamesView ? 'visible' : 'hidden'} p-1`]}>
                    <span className="cursor-default">🔻</span>
                    <li className="flex flex-nowrap gap-2 cursor-default hover:bg-gray-300 active:bg-gray-500 rounded-full" onClick={() => (props.open(6))}><img src={GamesIcon} className="size-5"></img>Rock, Paper, Scissors</li>
                    <li className="flex flex-nowrap gap-2 cursor-default hover:bg-gray-300 active:bg-gray-500 rounded-full" onClick={() => (props.open(7))}><img src={PinballIcon} className="size-5"></img>Pinball</li>
                    <li className="flex flex-nowrap gap-2 cursor-default hover:bg-gray-300 active:bg-gray-500 rounded-full" onClick={() => (props.open(8))}><img src={GamesIcon} className="size-5"></img>Solitaire</li>
                </ul>
            </div>
            <div>
               <button className="w-full text-start text-2xl active:bg-gray-400 rounded-full p-5" onClick={() => (Templates())}>📁 Templates</button>
               <ul className={[`pl-5 text-[1rem] ${templatesView ? 'visible' : 'hidden'} p-1`]}>
                    <span className="cursor-default">🔻</span>
                    <li className="flex flex-nowrap gap-2 cursor-default hover:bg-gray-300 active:bg-gray-500 rounded-full" onClick={() => (props.open(9))}><img src={MediaIcon} className="size-5"></img>Small-Business-Basic</li>
                    <li className="flex flex-nowrap gap-2 cursor-default hover:bg-gray-300 active:bg-gray-500 rounded-full" onClick={() => (props.open(10))}><img src={MediaIcon} className="size-5"></img>Small-Business-Mid</li>
                    <li className="flex flex-nowrap gap-2 cursor-default hover:bg-gray-300 active:bg-gray-500 rounded-full" onClick={() => (props.open(11))}><img src={MediaIcon} className="size-5"></img>Small-Business-Premium</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Menu;