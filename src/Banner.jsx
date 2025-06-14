import React from "react"
import { NavLink } from "react-router";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ConstructionIcon from '@mui/icons-material/Construction';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function Banner(){
    return (
        <div className="mb-15 border-b-15 border-emerald-600 w-[95%] place-self-center bg-white rounded-2xl flex flex-wrap passion-one-regular">
          <div className="md:basis-1/3">
            <h1 className="text-6xl ml-5">Matthew Means</h1>
            <h2 className="text-2xl ml-5 text-center">Full-Stack Web Developer 🌐</h2>
          </div>
          <div className="md:basis-2/3 w-full flex md:justify-around place-items-end text-2xl">
            <NavLink to="/home"><HomeIcon/>Home</NavLink>
            <NavLink><ConstructionIcon/>Skills</NavLink>
            <NavLink><PersonIcon/>About</NavLink>
            <NavLink><ConnectWithoutContactIcon/>Contact</NavLink>
            <NavLink><AutoStoriesIcon/>Portfolio</NavLink>
          </div>
        </div>

      )
}

export default Banner;