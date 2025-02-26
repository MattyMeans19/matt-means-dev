import React from "react";

function Buttons(props){
    return(
        <div>
          <button class="bg-green-200 px-5 border-solid border-b-1 text-[1.5rem] text-center rounded-t-4xl pt-2 hover:bg-green-400 focus:outline-3 active:bg-green-600" onClick={() =>{
            props.onClicked(props.description)
          }}>{props.text}</button>
        </div>
    )
}

export default Buttons;