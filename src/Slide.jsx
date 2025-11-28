

export default function Slide(props){

    return(
        <div className="w-[90vw] h-full gap-5 flex flex-col justify-between bg-emerald-800/35 p-5 border rounded-3xl shrink-0">
            <h1 className="text-center text-3xl lg:text-7xl underline bg-white/35 rounded-3xl p-2">{props.name}</h1>
            <a href={props.url} target="_blank" className="grow bg-white/35 rounded-3xl place-content-center text-center lg:text-4xl">URL: {props.url}</a>
            <p className="grow lg:text-3xl text-center place-content-center bg-white/35 rounded-3xl">{props.description}</p>
            <img src={props.image} alt="screenshot of site landing page" className="w-[800px] place-self-center"/>
        </div>
    )
}