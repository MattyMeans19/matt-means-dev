import React, {useState} from "react";
import PageType from "./PageType";

function Content(){


    return(
        <div>
            <PageType />

        <div>
            <h1 class="text-[4rem] text-center">Template Selector</h1>
            <div class="grid grid-cols-5 gap-3 border-5 border-gray-800 rounded-2xl p-2 w-[90vw] place-self-center bg-green-100">
                <div class="border-double border-10 border-gray-600 col-span-3 col-start-2 bg-white">
                    <h2 class="text-[1.5rem]">Number of pages:  </h2>
                </div>
                <div class="border-double border-10 border-gray-600 col-start-1 col-span-1 bg-white">
                    <h2 class="text-[1.5rem] text-center underline">Style Selector</h2>
                </div>
                <div class="border-double border-10 border-gray-600 col-span-4 bg-white">
                    <h2 class="text-[1.5rem] text-center underline">Preview</h2>
                </div>
            </div>
        </div>
            
      </div>
    )
}

export default Content;