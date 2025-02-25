import React, {useState} from "react";
import Buttons from "./Buttons";

function Content(){

    const [isStatic, setPageType]=useState(true);

    function changePageType(){
        setPageType(!isStatic)
    }

    return(
        <div class="my-35 flex flex-nowrap flex-col items-center">
            <h1 class="text-center text-[5rem] underline ">Choose a style to see a preview</h1>
            <div class="flex flex-nowrap justify-between gap-25 mt-10">
                <Buttons
                    text="static"
                    onClicked={changePageType}
                />
                <Buttons
                    text="dynamic"
                    onClicked={changePageType}
                />
            </div>
            
      </div>
    )
}

export default Content;