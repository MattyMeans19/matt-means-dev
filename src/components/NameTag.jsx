import React from "react";
import ME from "../assets/ME.jpg"

function NameTag(){
    return(
        <div class="flex flex-wrap items-center border-double border-black border-8 rounded-2xl mx-20 bg-paper bg-gray-400">
            <div class="basis-1/1 mb-20 mt-2 bg-green-500 text-center border-double border-black border-2 text-white">
                <h1 class="text-[6rem]">Hello</h1>
                <h2 class="text-[4rem]">my name is:</h2>
            </div>
            <div class="basis-1/2">
                <h2 class="text-center text-[5rem]">Matt</h2>
            </div>
            <div class="basis-1/2 p-5">
            <img src={ME} class="box-content border-4 w-[100%] h-[50vh]"/>
            </div>
        </div>
    );
}

export default NameTag;