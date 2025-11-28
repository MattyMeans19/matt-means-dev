import { Observer } from 'tailwindcss-intersect';
import Navbar from './Navbar';
import AboutMe from './AboutMe';
import { useState } from 'react';
import ContactMe from './Contact';
import Skills from './Skills';
import Portfolio from './Portfolio';

function App() {
  const [currentTab, updateTab] = useState(<AboutMe />)
  Observer.start();

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
  }

  return(
    <div className='flex flex-col gap-5 h-screen w-screen'>
      <Navbar ChangeTab={changeTab}/>
      {currentTab}
    </div>
  )
}

export default App;
