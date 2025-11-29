

export default function Slide(props){

    return(
        <div className="w-[90vw] gap-5 flex flex-col md:grid grid-cols-4 grid-rows-5 p-5 shrink-0">
            <h1 className="text-center place-content-center md:text-3xl 2lg:text-7xl col-start-1 col-span-2 underline border bg-white/35 rounded-3xl p-2">{props.name}</h1>
            <a href={props.url} target="_blank" className="col-start-1 col-span-2 border bg-white/35 
            rounded-3xl place-content-center p-2 text-wrap md:text-center md:text-2xl 2xl:text-4xl">
                {props.url}
            </a>
            <p className="2xl:text-3xl p-5 col-start-1 col-span-2 row-span-2 text-center place-content-center border bg-white/35 
            rounded-3xl wrap-break-word">
                {props.description}
            </p>
            <img src={props.image} alt="screenshot of site landing page" className="col-start-3 col-span-2 row-start-2 row-span-2 2xl:w-[800px] place-self-center"/>
        </div>
    )
}