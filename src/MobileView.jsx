import React, {useState} from "react";
import { apps } from "./Apps";
import MobileIcons from "./MobileIcons";


function MobileView(){
    const icons = apps;



    return(
        <div className="grid grid-cols-4 p-1 gap-15 w-screen max-h-screen mt-50">
            {icons.map((icon) =>
            <MobileIcons 
                key= {icon.id}
                name= {icon.name}
                icon= {icon.icon}
                id= {icon.id}
            />
            )}
        </div>
    )
}

export default MobileView;