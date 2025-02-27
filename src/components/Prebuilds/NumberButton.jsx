import React from "react";

function NumberButton(props){
    return(
        <button class="border-solid border-2 w-[50%] place-self-center hover:bg-green-300 active:bg-green-700" onClick={() =>{
            props.onClicked(props.pageNumber)
        }}>{props.pageNumber}</button>
    )
}

export default NumberButton;