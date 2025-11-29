import Navbar from './Navbar';
import AboutMe from './AboutMe';
import { useState } from 'react';
import ContactMe from './Contact';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Navlights from './Navlights';
import ScreenNodes from './ScreenNode';

function App() {
  const [currentTab, updateTab] = useState("")
  const [view, updateView] = useState("")
  
  function changeTab(tab){
    if(tab === "AboutMe"){
      updateTab(<AboutMe />);
    } else if(tab === "Portfolio"){
      updateTab(<Portfolio />)
    } else if(tab === "Skills"){
      updateTab(<Skills />)
    } else if(tab === "Email"){
      updateTab(<ContactMe />)
    }
    updateView(tab);
  }

  return(
    <div className='w-screen h-full 2xl:max-h-screen'>
      <Navbar view={view} ChangeTab={changeTab}/>
      <Navlights view={view} />
      <ScreenNodes view={view} />
      <div className='w-[90vw] h-full xl:h-[80vh] place-self-center place-content-center audiowide border-y-20 rounded-4xl border-gray-500 screen-bg'>
        {currentTab}
      </div>
      
    </div>
  )
}

export default App;
