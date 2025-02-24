import { useState } from 'react'
import NavButton from './NavButton';

function NavBar(){
    return(
        <div class="flex flex-col items-center">
            <div class="box-border border-double border-5 p-5 rounded-t-lg w-[100%] bg-pattern">
                <div class="basis-1/2 text-center text-[2.5rem] tracking-[2rem]"><h1>Matthew Means</h1></div>
                <div class="basis-1/2 text-center text-[1.5rem]"><h2>Full-stack 🌐  Web Developer</h2></div>
            </div>

            <div class="flex flex-nowrap w-[75vw] gap-4">
                <NavButton
                    text="🏠 Home"
                    route = "home"
                 />
                 <NavButton
                    text="📃 Templates"
                    route = "templates"
                 />
                 <NavButton
                    text="📚 Portfolio"
                    route = "portfolio"
                 />
            </div>
        </div>
    )
}

export default NavBar;