
export default function Navlights(props){
    return(
        <div className="flex flex-col">
            <div className='w-full h-[10vh] flex flex-row justify-around place-items-center'>
                <span className={`navPath ${props.view === "AboutMe" ? 'bg-green-600 border-y-green-600' : 'bg-red-600 border-y-red-600'}`}></span>
                <span className={`navPath ${props.view === "Portfolio" ? 'bg-green-600 border-y-green-600' : 'bg-red-600 border-y-red-600'}`}></span>
                <span className={`navPath ${props.view === "Skills" ? 'bg-green-600 border-y-green-600' : 'bg-red-600 border-y-red-600'}`}></span>
                <span className={`navPath ${props.view === "Email" ? 'bg-green-600 border-y-green-600' : 'bg-red-600 border-y-red-600'}`}></span>
            </div> 

        </div>
      
    )
}