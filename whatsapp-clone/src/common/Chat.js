import React, { useState, useEffect } from 'react'
import '../style/Chat.css'
import { Avatar,  IconButton } from "@material-ui/core"
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';


function Chat(){
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");
    useEffect(() => { 
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const sendMessage = (e) =>{
        e.preventDefault();
        console.log(input);

        setInput("");
    };

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p> Last seen at {} </p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && "chat__reciever"}`}>
                <span className="chat__name">Sonny</span>
                whats up
                <span className="chat__timestamp">3:54</span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form>
                    <input 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message"
                    type="text"/>
                    <button onClick={sendMessage} type="submit">Send a Message </button>
                </form>
                <MicIcon/>
            </div>
        </div>
    );
}

export default Chat
