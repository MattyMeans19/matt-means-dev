import DocIcon from "/icons8-document-69.png";
import SkillsIcon from "/icons8-skills-64.png";
import PortfolioIcon from "/icons8-portfolio-32.png";
import CMDIcon from "/icons8-command-64.png";
import Welcome from "./Welcome";

export const apps = [
    {
        name: "Welcome",
        icon: CMDIcon,
        content: <Welcome />,
        visibility: true,
        index: 1, 
        height: "h-[600px]",
        width: "w-[600px]"
    },
    {
        name: "About Me",
        icon: DocIcon,
        content: "This will be the About Me Document",
        visibility: false,
        index: 2, 
        height: "h-[300px]",
        width: "w-[600px]"
    },
    {
        name: "Skills",
        icon: SkillsIcon,
        content: "This will be the Skills App",
        visibility: false,
        index: 3, 
        height: "h-[500px]",
        width: "w-[500px]"
    },
    {
        name: "Portfolio",
        icon: PortfolioIcon,
        content: "This will be the Portfolio App",
        visibility: false,
        index: 4, 
        height: "h-[600px]",
        width: "w-[600px]"
    }
]

export function OpenApp(index){
    apps[index].visibility = true;
}

export function CloseApp(index){
    apps[index].visibility = false;
}