import { useState } from 'react'

const [text, setText] = "";

function NavButton(props){
    return(
        <div class ="text-center text-[1.5rem] basis-1/3 rounded-b-lg border-double border-6 bg-linear-to-t from-green-500 to-gray-500 shadow-[0_25px_50px_5px] shadow-black">
        <button class="w-[100%] hover:bg-emerald-400">{props.text}</button>
    </div>
    );
}

export default NavButton;