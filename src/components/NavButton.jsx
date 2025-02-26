import { useState } from 'react'
import { Link } from 'react-router';



function NavButton(props){
    const pageLink =props.route;

    return(
        <div class ="text-center text-[1.5rem] w-[100%] basis-1/3 rounded-b-lg border-double border-6 bg-linear-to-t from-green-500 to-gray-500 shadow-[0_25px_50px_5px] shadow-black">
        <Link to={pageLink}>
            <button class="hover:bg-emerald-400 w-[100%] ">{props.text}</button>
        </Link>
    </div>
    );
}

export default NavButton;