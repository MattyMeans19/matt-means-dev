import React from "react";

function Welcome(){
    return(
        <div className="p-5  px-15 bg-black text-white flex flex-col gap-15 text-4xl h-full w-full overflow-y-scroll">
            <span>Hello!</span>
            <span>Thanks for visiting my webpage. Click on an icon to see any relevant information! Click within any window, or on the item-tab at the bottom of the screen, to bring it to the front.
                You can also drag the window where ever you want to by clicking and holding within the top bar of the window. Give it a try with this window!
            </span>
            <span>I had a lot of fun building this webpage, and I hope you have as much fun exploring it!</span>
        </div> 
    )
}

export default Welcome;