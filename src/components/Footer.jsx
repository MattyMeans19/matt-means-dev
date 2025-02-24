import React from "react";

function Footer(){
    const year = new Date().getFullYear();

    return( 
        <div class="text-center bg-white">
            <footer>Copyright ©️ Matthew Means {year}</footer>
        </div>);

}

export default Footer;