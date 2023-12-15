// File: ChatFeed.js
import React from "react";

const ChatFeed = ({ currentChats }) => {
  return (
    <ul className="feed">
      {currentChats?.map((chatMessage, index) => (
        <li key={index}>
          <p className="role">{chatMessage.role}</p>
          <p className="chat-content">{chatMessage.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default ChatFeed;
