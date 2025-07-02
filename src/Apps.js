import DocIcon from "/icons8-document-69.png";
import SkillsIcon from "/icons8-skills-64.png";
import PortfolioIcon from "/icons8-portfolio-32.png";
import CMDIcon from "/icons8-command-64.png";

export const apps = [
        {
            name: "Welcome",
            icon: CMDIcon,
            visibility: true,
            minimized: false,
            id: 1, 
            height: "h-[600px]",
            width: "w-[600px]",
            isFocus: true        
        },
        {
            name: "About Me",
            icon: DocIcon,
            minimized: false,
            id: 2, 
            height: "h-[500px]",
            width: "w-[800px]",
            isFocus: false        
        },
        {
            name: "Skills",
            icon: SkillsIcon,
            minimized: false,
            id: 3, 
            height: "h-[800px]",
            width: "w-[1000px]",
            isFocus: false        
        },
        {
            name: "Portfolio",
            icon: PortfolioIcon,
            minimized: false,
            id: 4, 
            height: "h-[800px]",
            width: "w-[1200px]",
            isFocus: false        
        }
    ]