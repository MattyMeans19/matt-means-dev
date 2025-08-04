import DocIcon from "/icons8-document-69.png";
import SkillsIcon from "/icons8-skills-64.png";
import PortfolioIcon from "/icons8-portfolio-32.png";
import CMDIcon from "/icons8-command-64.png";
import SettingsIcon from "/icons8-settings-48.png";
import MediaIcon from "/icons8-media-player-64.png";
import GamesIcon from "/icons8-games-100.png";
import PinballIcon from "/icons8-pinball-64.png";
import EmailIcon from "/icons8-email-48.png";

export const apps = [
        {
            name: "Welcome",
            icon: CMDIcon,
            minimized: false,
            id: 1, 
            height: "h-[60vh]",
            width: "w-[40vw]",
            isFocus: true,
            onDesktop: true     
        },
        {
            name: "About Me",
            icon: DocIcon,
            minimized: false,
            id: 2, 
            height: "h-[80vh]",
            width: "w-[75vw]",
            isFocus: false,
            onDesktop: true       
        },
        {
            name: "Skills",
            icon: SkillsIcon,
            minimized: false,
            id: 3, 
            height: "h-[80vh]",
            width: "w-[75vw]",
            isFocus: false,
            onDesktop: true        
        },
        {
            name: "Portfolio",
            icon: PortfolioIcon,
            minimized: false,
            id: 4, 
            height: "h-[80vh]",
            width: "w-[80vw]",
            isFocus: false,
            onDesktop: true        
        },
                {
            name: "Settings",
            icon: SettingsIcon,
            minimized: false,
            id: 5, 
            height: "h-[85vh]",
            width: "w-[90vw]",
            isFocus: false,
            onDesktop: false      
        },
        {
            name: "R🪨, P📄, S✂️",
            icon: GamesIcon,
            minimized: false,
            id: 6, 
            height: "h-[85vh]",
            width: "w-[100vw]",
            isFocus: false,
            onDesktop: false        
        },
        {
            name: "PinBall",
            icon: PinballIcon,
            minimized: false,
            id: 7, 
            height: "h-[85vh]",
            width: "w-[100vw]",
            isFocus: false,
            onDesktop: false       
        },
        {
            name: "Solitaire",
            icon: GamesIcon,
            minimized: false,
            id: 8, 
            height: "h-[85vh]",
            width: "w-[100vw]",
            isFocus: false,
            onDesktop: false        
        },
        {
            name: "Small-Business-Basic",
            icon: MediaIcon,
            minimized: false,
            id: 9, 
            height: "h-[85vh]",
            width: "w-[100vw]",
            isFocus: false,
            onDesktop: false        
        },
        {
            name: "Small-Business-Mid",
            icon: MediaIcon,
            minimized: false,
            id: 10, 
            height: "h-[85vh]",
            width: "w-[100vw]",
            isFocus: false,
            onDesktop: false       
        },
        {
            name: "Small-Business-Premium",
            icon: MediaIcon,
            minimized: false,
            id: 11, 
            height: "h-[85vh]",
            width: "w-[100vw]",
            isFocus: false,
            onDesktop: false        
        },
        {
            name: "Email",
            icon: EmailIcon,
            minimized: false,
            id: 12, 
            height: "h-[85vh]",
            width: "w-[50vw]",
            isFocus: false,
            onDesktop: true        
        }
    ]