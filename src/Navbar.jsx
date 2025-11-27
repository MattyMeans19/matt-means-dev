import { useState } from "react";


export default function Navbar(props){
    const [selected, changeSelected] = useState("AboutMe");

    function updateSelected(tab){
        changeSelected(tab);
        props.ChangeTab(tab);
    }
    return(
        <div className='w-full bg-emerald-950 border py-2 flipDown'>
            <ul className='flex flex-row h-full justify-around place-items-center md:text-2xl'>
                <li>
                    <button className={`tabSelection ${selected === "AboutMe" ? 'underline' : null}`}
                    onClick={() =>(updateSelected("AboutMe"))}>
                        About Me
                    </button>
                </li>
                <li>
                    <button className={`tabSelection ${selected === "Portfolio" ? 'underline' : null}`}
                    onClick={() =>(updateSelected("Portfolio"))}>
                        Portfolio
                    </button>
                </li>
                <li>
                    <button className={`tabSelection ${selected === "Skills" ? 'underline' : null}`}
                    onClick={() =>(updateSelected("Skills"))}>
                        Skills
                    </button>
                </li>
                <li>
                    <button className={`tabSelection ${selected === "Email" ? 'underline' : null}`}
                    onClick={() =>(updateSelected("Email"))}>
                        Contact
                    </button>
                </li>
            </ul>
        </div>
    )
}