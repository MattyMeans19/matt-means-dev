import React from "react";
import List from "./DetailList"

function Details(){
    return(
        <div class="flex flex-col gap-20 border-double border-black border-5 p-5 mx-10 bg-paper">
            <div>
                <h1 class="text-center text-[3rem] underline">You're here because you need an online presence.</h1>
                <h2 class="text-center text-[2rem] mb-10">That's where I come in. 😎</h2>
                <p class="text-[1.5rem] mb-4 ">Using modern techniques I can build an array of web apps from the ground up to fit most needs. From the simplest, single-page, static websites to a multi-page, dynamic web app that utilizes
                    SQL databases, APIs, and any other back-end requirements. A web page isn't just about functionality though. It's a way to show the public who you are from where ever they 
                    have internet access. Besides, online is where nearly 80% of consumers will meet you or your brand for the first time. First impressions mean a lot!
                </p>
                <p class="text-[1.5rem]">With me as your middle-man between you and the online world, you'll have access to a totally customized experience that you can share with others!
                    From day one I will work closely with you to create the website that you invision. From design, to functionality, you will have input and access to the
                    design proccess every step of the way. 
                </p>
            </div>
            <div>
                <List />
            </div>
        </div>

    );
}

export default Details;