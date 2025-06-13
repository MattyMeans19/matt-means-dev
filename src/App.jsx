import React, {useState} from 'react'
import Folder from "/icons8-folder-48.png"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { NavLink } from 'react-router';

function App() {
  const [assestVisible, changeAssetVisible] = useState(false);
  const [NameVisible, changeNameVisible] = useState(false);

  function FirstClick(){
    changeAssetVisible(!assestVisible);
  }

  function SecondClick(){
    changeNameVisible(!NameVisible);
  }

  return (
    <div className='p-25 mt-15 place-self-center flex flex-col gap-15 border-15 border-double border-emerald-600 rounded-4xl h-[90vh] w-[90%] bg-gray-200'>
      <button className='hover:bg-sky-200 active:bg-sky-400' onClick={() => (FirstClick())}>
        <div className='flex gap-5'>
          <span className='place-self-center'>{assestVisible ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon /> }</span>
          <img src={Folder}/>
          <h1 className='place-self-center text-3xl'>Web Development Projects</h1>
        </div>        
      </button>

      <button className={[`hover:bg-sky-200 active:bg-sky-400 pl-25 ${assestVisible ? 'visible' : 'hidden'}`]} onClick={() => (SecondClick())}>
        <div className='flex gap-5'>
          <span className='place-self-center'>{NameVisible ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon /> }</span>
          <img src={Folder}/>
          <h1 className='place-self-center text-3xl'>Assets</h1>
        </div>        
      </button>

      <NavLink to="/home">
        <div className={[`${NameVisible ? 'visible' : 'hidden'} animate-jump-in animate-once animate-duration-500 animate-ease-in mt-[5%] border-double border-5 p-15 rounded-full pattern`]}>
          <h1 className='text-center text-7xl mb-15 text-white'>Matthew Means</h1>
          <h2 className='text-center text-4xl text-white'>Full-Stack Web Developer 🌐</h2>
        </div>
      </NavLink>

    </div>
    
  )
}

export default App
