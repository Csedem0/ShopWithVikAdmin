import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

const MessageReceiver = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = socketIOClient("http://localhost:3000");

    socket.on("contact-form", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  return (
    <div>
      <h1>Received Messages</h1>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <p>Name: {message.name}</p>
            <p>Email: {message.email}</p>
            <p>Message: {message.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageReceiver;
