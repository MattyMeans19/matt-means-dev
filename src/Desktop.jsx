import React from "react";
import Icon from "./Icon";
import DocumentIcon from "/icons8-document-69.png";
import SkillsIcon from "/icons8-skills-64.png";
import PortfolioIcon from "/icons8-portfolio-32.png"

function Desktop(){
    return(
        <div className="flex flex-col gap-5">
            <Icon 
                icon = {DocumentIcon}
                name = "About Me"
            />
            <Icon 
                icon = {SkillsIcon}
                name = "Skills"
            />
            <Icon 
                icon = {PortfolioIcon}
                name = "Portfolio"
            />
        </div>
    )
}

export default Desktop;