import { useState } from "react";


export default function Navbar(props){
    const [selected, changeSelected] = useState(props.view);

    function updateSelected(tab){
        changeSelected(tab);
        props.ChangeTab(tab);
    }
    return(
        <div className='w-full border py-2 metal-bg md:rounded-b-full shadow-xl shadow-black'>
            <ul className='flex flex-row h-[5vh] justify-around place-items-center md:text-2xl'>
                <li>
                    <button className={`navButton handjet-neon ${selected === "AboutMe" ? 'navSelected' : 'navDeselected'}`}
                    onClick={() =>(updateSelected("AboutMe"))}>
                        About Me
                    </button>
                </li>
                <li>
                    <button className={`navButton handjet-neon ${selected === "Portfolio" ? 'navSelected' : 'navDeselected'}`}
                    onClick={() =>(updateSelected("Portfolio"))}>
                        Portfolio
                    </button>
                </li>
                <li>
                    <button className={`navButton handjet-neon ${selected === "Skills" ? 'navSelected' : 'navDeselected'}`}
                    onClick={() =>(updateSelected("Skills"))}>
                        Skills
                    </button>
                </li>
                <li>
                    <button className={`navButton handjet-neon ${selected === "Email" ? 'navSelected' : 'navDeselected'}`}
                    onClick={() =>(updateSelected("Email"))}>
                        Contact
                    </button>
                </li>
            </ul>
        </div>
    )
}