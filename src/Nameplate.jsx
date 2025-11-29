import MyPic from "/ME.jpg"


export default function Nameplate(){
    return(
    <div className='h-full grow basis-1/3 text-center place-items-center flex flex-col md:gap-[5vh]'>
      <h1 className='md:text-4xl titleText text-outline-Title'>Matthew Means</h1>
      <img src={MyPic} className='border-15 border-double bg-emerald-800 rounded-2xl md:size-70 2xl:size-100'/>
      <h2 className='md:text-2xl text-center contentText md:text-outline-Content'>Full-Stack Reliability</h2>
      <h2 className='md:text-2xl text-center contentText md:text-outline-Content'>Next-Level Performance</h2>
    </div>
    )
}