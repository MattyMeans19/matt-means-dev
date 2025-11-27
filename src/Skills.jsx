
export default function Skills(){
    return(
        <div className="flex flex-col gap-5 lg:grid grid-cols-5 p-10">
            <div className="basis-1/2 lg:col-span-2">
                <ul className="skillList">
                    <h1 className="skillTitle fadeDown">Front-End</h1>
                    <li className="skillItem fadeRightDelayed">Proficient with programming languages such as JavaScript and TypeScript, HTML5, and CCS3</li>
                    <li className="skillItem fadeRightDelayed">Can create interactive web pages with JavaScript frameworks like EJS, React, and Next.js</li>
                    <li className="skillItem fadeRightDelayed">Able to make any webpage resonvsive to screen size using frameworks like TailwindCSS, or libraries like Bootstrap</li>
                </ul>
            </div>
            <div className="basis-1/2 lg:col-start-4 col-span-2">
                <ul className="skillList">
                    <h1 className="skillTitle fadeDown">Back-End</h1>
                    <li className="skillItem fadeLeft">Can securly fetch data from databases using PostgreSQL, or 3rd party providers using RESTful APIs, and Express.js</li>
                    <li className="skillItem fadeLeft">Can create webpages with SEO(Search Engine Optimization) leveraging server-side rendering with Next.js</li>
                    <li className="skillItem fadeLeft">Able to provide secure passwords and user info using industry standard encryption methods</li>
                </ul>
            </div>
        </div>
    )
}