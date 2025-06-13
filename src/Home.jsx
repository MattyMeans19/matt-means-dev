import React from "react";
import Banner from "./Banner";
function Home(){
    return(
        <div>
            <Banner/>
            <div className='animate-fade-left animate-once animate-ease-in mx-[5%] border-10 border-double rounded-3xl border-emerald-600 p-15 bg-gray-200'>
                <h1 className='text-[8vw]'>Hey there, I'm Matt.</h1>
                <p className='text-[1.8vw] underline underline-offset-15 decoration-amber-400 mb-10'>✨I'm a full-stack web developer with the skills and experience to help build just about any webpage!</p>
                <p className="text-3xl leading-15 border-1 p-5 rounded-3xl">On the front-end I can customize a webpage to just about any specification and at the back-end I can write all the necessary code to provide the expected functionality.
                    Don't just take my word for it though! Please browse this website I built from scratch to get an idea of what I can do!
                    A list of all my skills as a web developer can be found on the 'Skills' page.
                    Want a little background? Check out the 'About' page.
                    Have a look at all my work-to-date on my 'Portfolio' page.
                    Interested in what I can provide for you? Then head to the 'Contact' page!
                </p>
            </div>
        </div>
    )
}

export default Home;