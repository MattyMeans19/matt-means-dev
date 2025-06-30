import React from "react";
import ME from "/ME.jpg";

function About(){
    return(
        <div className="bg-white border-2 size-full overflow-y-scroll text-wrap p-2 text-center passion-one-black">
            <h1 className="text-4xl">Hi, my name is Matthew Means,</h1>
            <img src={ME} className="size-100 place-self-center rounded-full border-10 border-double border-emerald-600"/>
            <h2 className="text-2xl mb-15">but you can call me Matt!</h2>
            <p className="passion-one-regular text-2xl my-5 p-5">
                Since a young age I have had many passions like writing, music, and technology. I have dedicated an inumerable amount of hours
                of my life pursuing each, and refining my skills. If you are reading this right now it means you are most likely interested in a specific
                area of my expertise: Technology.
            </p>
            <p className="passion-one-regular text-2xl my-5 p-5">
                I'm the kind of guy that looks at a piece of tech and immediately begins to tear it apart in my mind's eye, intent on figuring out exactly
                how it functions. As a child I was more apt to just tear it apart and look at the inside of it, much to my parents' chagrin.
                As a teenager I took many tech oriented classes in high school, like robotics and 3D animation, and this was merely the beginning of my journey in tech.
                I attended a trade school and obtained an Associate's of Applied Science in Electrical Engineering Technology, and still currently utilize the skills I
                honed while attending. Professionally I have worked tech in a variety of environments, from the Oilfield industry, to consumer electronics.
                As I've grown, I realize that my passion for tech has been lopsided towards the hardware aspects, and so I began learning and refining skills
                relating to software and programming. 
            </p>
            <p className="passion-one-regular text-2xl my-5 p-5">
                Now I am a certified Full-Stack Web Developer. I have the skills needed to build any type of website from the ground up. Just take a look at this webpage. I wrote every single line of code in
                order to build this page that looks like the desktop for a Windows PC or Linux PC! Let me help you bring your visions to life, just as I have my own!
            </p>
        </div>
    )
}

export default About;