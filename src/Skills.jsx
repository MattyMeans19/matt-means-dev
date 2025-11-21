import React from "react";

function Skills(){
    return(
        <div className="size-[100%] bg-emerald-300 overflow-y-scroll">
            <div className="grid grid-cols-8 gap-15 p-5 passion-one-regular desktop">
                <div className="col-start-1 col-span-4 bg-amber-100 border-3 border-black p-2 rounded-2xl">
                    <h1 className="text-4xl text-center underline mb-5">Front End</h1>
                    <p className="text-2xl p-5 border-5 border-double mb-15">From stylizing things like fonts and colors, to making basic functionality like a button click. This webpage is purely front end, and a great example of what I can do!</p>
                    <ul className="ml-5 list-disc text-2xl">
                        <li>Experienced with custom CSS and CSS frameworks (This page uses TailwindCSS)</li>
                        <li>Proficient in web based langauges like HTML and JavaScript</li>
                        <li>Experienced with JavaScript Frameworks like Node, Express, jQuery, and React(this webpage uses React!)</li>
                        <li>Knowledge of Next.js in regards to front-end applications.</li>
                    </ul>
                </div>
                <div className="col-start-5 col-span-4 bg-amber-100 border-3 border-black p-2 rounded-2xl">
                    <h1 className="text-4xl text-center underline mb-5">Back End</h1>
                    <p className="text-2xl p-5 border-5 border-double mb-15">Accessing databases and external resources isn't a problem for me! Whether it's for a blog site, business, or e-comemrce, I can build all the functionality to meet your needs!</p>
                    <ul className="ml-5 list-disc text-2xl">
                        <li>Proficient with SQL database language</li>
                        <li>Can build custom APIs or leverage exisiting ones</li>
                        <li>Can provide built-in security using modern hashing techniques.</li>
                        <li>Knowledge of Next.js in regards to back-end applications.</li>
                    </ul>                
                </div>

                <div className="border-10 border-double border-black col-span-full bg-amber-100">
                    <h1 className="text-4xl text-center underline mb-1">Other Skills</h1>
                    <h2 className="text-2xl text-center mb-5">These skills aren't specific to web-design, but they are useful!</h2>
                    <ul className="ml-15 list-disc text-2xl">
                        <li>Advanced communications, verbal and written.</li>
                        <li>Punctual and task oriented.</li>
                        <li>Advanced critical thinking skills and highly able to think 'outside of the box'.</li>
                        <li>Proficient with Typescript.</li>
                        <li>Proficient with version control using Git.</li>
                    </ul>                
                </div>
            </div>
            <div className="bg-emerald-300 size-full flex flex-col gap-15 p-5 passion-one-regular overflow-y-scroll absolute top-0 mobile">
                <div className=" bg-amber-100 border-3 border-black p-2 rounded-2xl">
                    <h1 className="text-4xl text-center underline mb-5">Front End</h1>
                    <p className="text-2xl p-5 border-5 border-double mb-15">From stylizing things like fonts and colors, to making basic functionality like a button click. This webpage is purely front end, and a great example of what I can do!</p>
                    <ul className="ml-5 list-disc text-2xl">
                        <li>Experienced with custom CSS and CSS frameworks (This page uses TailwindCSS)</li>
                        <li>Proficient in web based langauges like HTML and JavaScript</li>
                        <li>Experienced with JavaScript Frameworks like Node, Express, jQuery, and React(this webpage uses React!)</li>
                    </ul>
                </div>
                <div className="bg-amber-100 border-3 border-black p-2 rounded-2xl">
                    <h1 className="text-4xl text-center underline mb-5">Back End</h1>
                    <p className="text-2xl p-5 border-5 border-double mb-15">Accessing databases and external resources isn't a problem for me! Whether it's for a blog site, business, or e-comemrce, I can build all the functionality to meet your needs!</p>
                    <ul className="ml-5 list-disc text-2xl">
                        <li>Proficient with SQL database language</li>
                        <li>Can build custom APIs or leverage exisiting ones</li>
                        <li>Can provide built-in security using modern hashing techniques.</li>
                    </ul>                
                </div>

                <div className="border-10 border-double border-black bg-amber-100">
                    <h1 className="text-4xl text-center underline mb-1">Other Skills</h1>
                    <h2 className="text-2xl text-center mb-5">These skills aren't specific to web-design, but they are useful!</h2>
                    <ul className="ml-15 list-disc text-2xl">
                        <li>Advanced communications, verbal and written.</li>
                        <li>Punctual and task oriented.</li>
                        <li>Advanced critical thinking skills and highly able to think 'outside of the box'.</li>
                    </ul>                
                </div>
            </div>
        </div>
        
    )
}

export default Skills;