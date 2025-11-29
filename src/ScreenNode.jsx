
export default function ScreenNodes(props){
    return(
        <div className='w-full h-[2vh] flex flex-row justify-around place-items-center'>
            <span className={`navNode 
                ${props.view === "AboutMe" ? 'bg-green-600 border-t-green-600' : 'bg-red-600 border-t-red-600'}
                ${props.view === "" ? 'bg-slate-700' : null}`}></span>
            <span className={`navNode 
                ${props.view === "Portfolio" ? 'bg-green-600 border-t-green-600' : 'bg-red-600 border-t-red-600'}
                ${props.view === "" ? 'bg-slate-700' : null}`}></span>
            <span className={`navNode 
                ${props.view === "Skills" ? 'bg-green-600 border-t-green-600' : 'bg-red-600 border-t-red-600'}
                ${props.view === "" ? 'bg-slate-700' : null}`}></span>
            <span className={`navNode 
                ${props.view === "Email" ? 'bg-green-600 border-t-green-600' : 'bg-red-600 border-t-red-600'}
                ${props.view === "" ? 'bg-slate-700' : null}`}></span>
        </div>
    )
}