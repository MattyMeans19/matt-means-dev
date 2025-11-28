import Nameplate from './Nameplate';

export default function AboutMe(){
    return(
      <div className='flex flex-wrap gap-5 lg:gap-25 place-content-center lg:flex-column'>
        <Nameplate/>
        <p className='place-self-center place-content-center 
        text-gray-400 md:text-5xl lg:text-7xl text-center bg-emerald-800/45 border-10 border-double 
        border-black rounded-3xl px-10 lg:p-10 mx-5 lg:mx-10 fadeLeft'>As a versatile Full-Stack Developer, 
        I deliver seamless digital solutions from database to 
          beautiful user interface. Leveraging React, Next.js, and Express.js, 
          I provide robust, all-in-one websites that are 
          easy to manage and engineered for reliability.</p>        
      </div>
    )
}