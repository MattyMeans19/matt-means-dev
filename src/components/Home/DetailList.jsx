import React from "react";

function DetailList(){
    return(
        <div class="flex flex-nowrap p-15 gap-20">
            <div class="basis-2/3 border-double border-black border-5 p-25 rounded-full bg-paper text-[1.5rem]">
                <h3>What can be customized, you might ask? Well here's a list of some things you will have a choice in picking:</h3>
                    <ul class="list-disc mt-10 tracking-[0.5rem]">
                        <li>Color Scheme 🎨</li>
                        <li>Fonts and themes 📃</li>
                        <li>Images 🖼️</li>
                        <li>Overall Layout 🔨</li>
                        <li>And More! 📦📦</li>
                    </ul>
            </div>
            <div class="basis-1/3 border-double border-black border-5 p-5 bg-pattern text-[1.5rem] text-center mt-6">
                <h3 class="text-[6rem]">😖</h3>
                <h4>Feeling overwhelmed with the sheer amount of things that go into a stylized web page?</h4>
                <p>No worries! Check out the 'Templates' tab for some prebuilt pages that can be adjusted to your liking, 
                    or check out the 'Portfolio' tab for some real-life examples that I helped bring to life to get some inspiration!
                </p>
            </div>
        </div>
    );
}

export default DetailList;