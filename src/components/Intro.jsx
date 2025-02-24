import React from "react";
import NameTag from "./NameTag";

function Intro(){
    return(
        <div class="flex flex-nowrap px-10">
        <div class="basis-2/3">
           <NameTag /> 
        </div>
        <div class="basis-1/3 border-double border-5 rounded-full p-15 size-[50%] self-center bg-paper">
            <p class="text-[2rem] text-center">✨ Having a great website is a crucial step to success. With my reiptoire of knowledge and expertise, I'd love to help you reach that success! ✨ </p>
        </div>
        
    </div>
    );
}

export default Intro;