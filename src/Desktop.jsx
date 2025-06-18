import React, {useState} from "react";
import Icon from "./Icon";


function Desktop(props){
    const [apps] = useState(props.apps);

    return(
        <div className="basis-1/3 flex flex-col place-items-start gap-5">
            {apps.map((app, index) =>(
                <Icon 
                    key = {index}
                    name = {app.name}
                    icon = {app.icon}
                    visibility = {app.visibility}
                    index = {app.index - 1}
                />
            ))}
        </div>
    )
}

export default Desktop;