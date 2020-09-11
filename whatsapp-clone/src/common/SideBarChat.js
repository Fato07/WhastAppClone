import React, { useState, useEffect } from 'react'
import '../style/SideBarChat.css'
import { Avatar } from "@material-ui/core"
import db from '../fireBase';
import { Link } from 'react-router-dom';


function SideBarChat({ id, name, addNewChat }) {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const createChat = () => {
        const roomName = prompt("Please Enter Name for chat");
        if (roomName) {
            //do some stuff in the database
            db.collection("rooms").add({
                name: roomName,
            })
        }

    };

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>Last Message...</p>
                </div>
            </div>
        </Link> 
    ) : (
            <div onClick={createChat} className="sidebarChat">
                <h2>Add New Chat</h2>
            </div>
        )
}
export default SideBarChat
