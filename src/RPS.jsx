import React from "react";
import Iframe from "react-iframe";

function RPS(){
    return(
        <Iframe 
            src={`${process.env.PUBLIC_URL}/rps.html`}
            width="100%"
            height="100%"
        />
    )
}

export default RPS;