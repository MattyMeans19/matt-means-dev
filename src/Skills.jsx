
export default function Skills(){
    return(
        <div className="grid grid-cols-2 py-5 gap-5 mx-5">
            <div className="h-full bg-green-400/10 rounded-4xl border">
                <ul className="flex flex-col gap-25 rounded-4xl">
                    <h1 className="skillLabel">Front-End</h1>
                    <li className="skillTile">Proficient with programming languages such as JavaScript and TypeScript, HTML5, and CCS3</li>
                    <li className="skillTile">Can create interactive web pages with JavaScript frameworks like EJS, React, and Next.js</li>
                    <li className="skillTile">Able to make any webpage resonvsive to screen size using frameworks like TailwindCSS, or libraries like Bootstrap</li>
                </ul>
            </div>
            <div className="h-full bg-green-400/10 rounded-4xl border">
                <ul className="flex flex-col gap-25 rounded-4xl">
                    <h1 className="skillLabel">Back-End</h1>
                    <li className="skillTile">Can securly fetch data from databases using PostgreSQL, or 3rd party providers using RESTful APIs, and Express.js</li>
                    <li className="skillTile">Can create webpages with SEO(Search Engine Optimization) leveraging server-side rendering with Next.js</li>
                    <li className="skillTile">Able to provide secure passwords and user info using industry standard encryption methods</li>
                </ul>
            </div>
        </div>
    )
}