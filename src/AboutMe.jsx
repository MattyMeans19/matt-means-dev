import Nameplate from './Nameplate';

export default function AboutMe(){
    return(
      <div className='px-[5vw] py-[10vh] w-full h-full flex flex-col md:flex-row place-items-center gap-25'>
        <Nameplate/>
        <p className='basis-1/2 grow md:text-3xl 2xl:text-5xl contentText md:text-outline-Content text-center md:text-start rounded-3xl bg-gray-400/10 p-5'>As a versatile Full-Stack Developer, 
        I deliver seamless digital solutions from database to 
          beautiful user interface. Leveraging React, Next.js, and Express.js, 
          I provide robust, all-in-one websites that are 
          easy to manage and engineered for reliability.</p>        
      </div>
    )
}