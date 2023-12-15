// File: ChatHistory.js
import React from "react";

const ChatHistory = ({ previousChatTitles, handleClick }) => {
  return (
    <ul className="history">
      {previousChatTitles?.map((uniqueTitle, index) => (
        <li key={index} onClick={() => handleClick(uniqueTitle)}>
          {uniqueTitle}
        </li>
      ))}
    </ul>
  );
};

export default ChatHistory;
