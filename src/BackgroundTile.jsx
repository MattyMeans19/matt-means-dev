import React from "react";

function Backgrounds(props){
    return(
        <div className="w-[200px] h-[200px] flex flex-col justify-center">
            <button className={[`size-[150px] ${props.image} place-self-center border-5 border-double rounded-2xl`]}></button>
            <h1 className="text-center">{props.name}</h1>
        </div>
    )
}

export default Backgrounds;