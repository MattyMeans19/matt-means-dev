import AKSImage from "/allkeyboardshortcuts.png";
import SBTImage from "/SBtemplate.png";
import PMAImage from "/PMA.png";
import LQImage from "/LyriQuery.png";

export const sites = [
    {
        id: 1, 
        name: "All Keyboard Shortcuts",
        url: "https://allkeyboardshortcuts.info",
        image: AKSImage,
        description: "A simple webiste that contains lists of keyboard shortcuts for various Operating Systems and Applications!\nIt was built using React + Vite and TailwindCSS, you can check out all the code at my Github Repo: https://github.com/MattyMeans19/all-keyboard-shortcuts.git"
    },
    {
        id: 2, 
        name: "Small Business Template",
        url: "https://smallbusiness-p-e6a955b1be25.herokuapp.com/",
        image: SBTImage,
        description: "This is a small business template website featuring live inventory and cart reservations. It was built with React + Vite and TailwindCSS for the front-end, and Express.js with Postgres for the back-end. A business-side dashboard for inventory and user management is accessible at the path /business-portal. Log in using the username 'Admin' and password 'Admin'."
    },
    {
        id: 3, 
        name: "Post Most Anything",
        url: "https://post-most-anything-45028429ddb1.herokuapp.com/",
        image: PMAImage,
        description: "This is a simple blog site that I built using Next.js and TypeScript. It uses hashing and salting for password encyrption, and creates session data that will last for a week. It uses a PostgreSQL database for storing data, and was designed with TailwindCSS. Check out the GitHub Repo here: https://github.com/MattyMeans19/post-most-anything.git"
    },
    {
        id: 4,
        name: "LyriQuery",
        url: "https://lyriquery-3b245fcbd6b4.herokuapp.com/",
        image: LQImage,
        description: "Search up any Lyrics using the LRCLIB public API. This site was built using Express.js back-end and EJS front-end. The styling is basic CSS, no frameworks used. Check out the code at my Github Repo: https://github.com/MattyMeans19/LyriQuery.git"
    }
]