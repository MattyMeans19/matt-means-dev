import React from "react";

function Fonts(props){
    return(
        <div className="border-5 border-double w-[250px] h-[150px] place-content-center hover:bg-gray-400 active:bg-gray-600" onClick={() => props.fontUpdate(props.class)}>
            <p className={[`${props.class} text-4xl text-center`]}>{props.name}</p>
        </div>
    )
}

export default Fonts;