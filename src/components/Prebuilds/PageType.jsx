import React, {useState} from "react";
import TypeButtons from "./TypeButtons";

function PageType(){

    const [typeDescription, setDescription]=useState("");

    function changeType(info){
        setDescription(info)
    }

    return(
        <div class="my-35 flex flex-nowrap flex-col items-center">
            <div class="flex flex-nowrap justify-between gap-25 mt-10 items-end">
            <h1 class="text-center text-[2rem] border-double border-5 border-emerald-500 rounded-t-2xl p-4 bg-linear-to-t from-gray-300 to-white">Select a type to see a brief description</h1>
                <TypeButtons
                    text="Static"
                    onClicked={changeType}
                    description="A Static web page is one that DOES NOT change. A single-page, static site will have only text and images. 
                    In most cases the only interactable parts of a static web page will be buttons or links to other pages, for a multi-page, Static website.
                    Static web pages are the quickest route to an online presence, but don't allow for much user interaction."
                />
                <TypeButtons
                    text="Dynamic"
                    onClicked={changeType}
                    description="A Dynamic web page is one that DOES change. From a simple clock, to more complex features, a Dynamic page will change in some way, most likely user input/interaction. 
                    A good example would be a registration/login form for saving/retrieving user data. More complex Dynamic web pages usually implement some kind of back-end feature and require more time 
                    and input to complete."
                />
                <TypeButtons
                    text="Mixed"
                    onClicked={changeType}
                    description="You can always do a combination of both as well. With a multi-page website not every page has to be one type. You can always mix and match for the perfect
                    style that fits your needs. This can take a while to build, but it can definitely be worth the wait."
                />
            </div>
            <p class="border-double border-5 border-black w-[80vw] rounded-2xl text-[2rem] p-4 bg-linear-to-b from-white to-gray-300 shadow-[0_12px_12px_10px] shadow-gray-400">{typeDescription}</p>
            
      </div>
    )
}

export default PageType;