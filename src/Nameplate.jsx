import MyPic from "/ME.jpg"


export default function Nameplate(){
    return(
    <div className='flex flex-col gap-5 place-items-center fadeRight'>
      <h1 className='text-5xl text-emerald-500 text-center'>Matthew Means</h1>
      <h2 className='text-xl text-gray-400 text-center'>Full-Stack Reliability. Next-Level Performance</h2>
      <img src={MyPic} className='size-[250px] lg:size-[400px] rounded-4xl border-10 border-double bg-emerald-500'/>
    </div>
    )
}