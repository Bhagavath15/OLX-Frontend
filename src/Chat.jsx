import { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

export const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleMessageChange = (e) => {
        setNewMessage(e.target.value);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim() === '') return;

        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setNewMessage('');
    };

    useEffect(() => {
        // Scroll to the bottom of the chat window when new messages are added
        const chatWindow = document.getElementById('chat-window');
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }, [messages]);

    return (
        <div className="chat-container">
            <h2>Chat</h2>
            <div id="chat-window" className="chat-window">
                {messages.map((message, index) => (
                    <div key={index} className="chat-message">
                        <span>{message}</span>
                    </div>
                ))}
                <form className="chat-field" onSubmit={handleSendMessage}>
                    <input
                        type="text"
                        value={newMessage}
                        onChange={handleMessageChange}
                        placeholder="Enter your message"
                    />

                    <IconButton variant="outlined" color="primary" fontSize="small" type="submit" ><SendIcon /></IconButton>
                </form>
            </div>

        </div>

    );
};
