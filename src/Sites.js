import AKSImage from "/allkeyboardshortcuts.png";
import SBTImage from "/SBtemplate.png";
import PMAImage from "/PMA.png";

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
        description: "This site is a template for a Small Business web page. It's intended to provide a live inventory and cart reservations for customers, while also providing information on the business. It was built using React + Vite and TailwindCSS for the font end, and Express.js for the backend using a custom API for a PostgreSQL database I built. If you add '/business-portal' to the base URL it will take you to a business-side dashboard for inventory and user management and you can login using 'Admin' for the username and password. You can check out all the code at my Github Repo: https://github.com/MattyMeans19/small-business-premium.git"
    },
    {
        id: 3, 
        name: "Post Most Anything",
        url: "https://post-most-anything-45028429ddb1.herokuapp.com/",
        image: PMAImage,
        description: "This is a simple blog site that I built using Next.js and TypeScript. It uses hashing and salting for password encyrption, and creates session data that will last for a week. It uses a PostgreSQL database for storing data, and was designed with TailwindCSS. Check out the GitHub Repo here: https://github.com/MattyMeans19/post-most-anything.git"
    }
]