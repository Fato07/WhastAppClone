import React, { useState, useEffect } from 'react'
import '../style/SideBar.css'
import { Avatar} from "@material-ui/core"


function SideBarChat(){
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    return (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>Last Message...</p>
            </div>
        </div>
    )
}
export default SideBarChat
