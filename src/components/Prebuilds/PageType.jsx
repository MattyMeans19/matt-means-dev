import React, {useState} from "react";
import TypeButtons from "./TypeButtons";

function PageType(){

    const [typeDescription, setDescription]=useState("");

    function changeType(info){
        setDescription(info)
    }

    return(
        <div class="my-35 flex flex-col items-center pb-15 border-double border-b-5 border-t-5">
            <div class="flex gap-25 mt-10 items-end shrink">
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
            <h2 class="text-center text-[2rem] border-double border-5 border-emerald-500 rounded-b-2xl p-4 bg-linear-to-t from-gray-300 to-white">Scroll down to check out the Template Selector!</h2>
            <h2 class="w-[50vw] mt-5 text-red-500">** If you open this page on a smartphone or tablet you may notice some aspects of this page adjust to the screen size, while others do not.
                This is referred to as 'Responsivness', and is implemented to adjust the view of a website to fit any screen size. I intentionally left responsiveness
                out of some components as a way to show you another aspect of building a web page. Adding responsiveness can increase the amount of time it takes to build,
                but will allow users to view your web page with no issues across any device or screen.
            </h2>
            
      </div>
    )
}

export default PageType;