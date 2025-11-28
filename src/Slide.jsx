

export default function Slide(props){

    return(
        <div className="w-[90vw] h-full gap-5 flex flex-col justify-between bg-emerald-800/35 p-5 border rounded-3xl shrink-0">
            <h1 className="text-center text-2xl lg:text-7xl underline bg-white/35 rounded-3xl p-2">{props.name}</h1>
            <a href={props.url} target="_blank" className="grow bg-white/35 rounded-3xl place-content-center text-center lg:text-4xl">URL: {props.url}</a>
            <p className="lg:text-3xl text-start place-content-center bg-white/35 rounded-3xl p-5">{props.description}</p>
            <a href={props.repo} target="=_blank" className="text-wrap break-words grow text-center bg-white/35 rounded-3xl p-5">Github Repo: {props.repo}</a>
            <img src={props.image} alt="screenshot of site landing page" className="w-[200px] h-[150px] md:w-[800px] md:h-[600px] place-self-center"/>
        </div>
    )
}