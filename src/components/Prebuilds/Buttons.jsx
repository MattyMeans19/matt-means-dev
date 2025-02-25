import React from "react";

function Buttons(props){
    return(
        <div>
          <button class="bg-gray-200 px-5 border-solid border-b-3" onClick={() =>{
            props.onClicked()
          }}>{props.text}</button>
        </div>
    )
}

export default Buttons;