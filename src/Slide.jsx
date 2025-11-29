

export default function Slide(props){

    return(
        <div className="w-[90vw] h-full gap-5 flex flex-col md:grid grid-cols-4 grid-rows-4 bg-emerald-800/35 p-5 border rounded-3xl shrink-0">
            <h1 className="text-center col-start-1 col-span-2 place-content-center text-3xl 2xl:text-7xl underline bg-green-600/15 rounded-3xl p-2">{props.name}</h1>
            <a href={props.url} target="_blank" className="bg-green-600/15 col-start-1 col-span-2 rounded-3xl place-content-center text-center 2xl:text-4xl">{props.url}</a>
            <p className="col-start-1 col-span-2 2xl:text-3xl text-center place-content-center bg-green-600/15 rounded-3xl">{props.description}</p>
            <img src={props.image} alt="screenshot of site landing page" className="w-[500px] 2xl:w-[800px] place-self-center col-start-3 col-span-2 row-start-2"/>
        </div>
    )
}