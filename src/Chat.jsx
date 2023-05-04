import { useState } from "react";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from "@mui/material/InputAdornment";

export const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessages([...messages, inputValue]);
        setInputValue("");
    };

    return (
        <div className="chat">
            <h2>Chat with the Dealer</h2>
            <div className="chatlist">
                <div className="chat-name">Chats are here</div>
                <div className="chat-content" >
                    {messages.map((message, index) => (
                        <p key={index}>{message}</p>
                    ))}
                </div>
                <div className="chat-form">
                    <form onSubmit={handleSubmit}>
                        <TextField
                            variant="standard"
                            label="Type your message here"
                            size="small"
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            InputProps={{
                                endAdornment: (
                                    < InputAdornment position="end">
                                        <IconButton color="primary" type="submit"><SendIcon /></IconButton>
                                    </InputAdornment>
                                )
                            }}

                        />
                    </form>
                </div>

            </div>
        </div >
    );
};

