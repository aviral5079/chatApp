// File: ChatInput.js
import React from "react";

const ChatInput = ({ value, setValue, getMessages }) => {
  return (
    <div className="bottom-section">
      <div className="input-container">
        <input
          data-testid="input"
          className="text-box"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div data-testid="submit" id="submit" onClick={getMessages}>
          ↵
        </div>
      </div>
      <p className="info"></p>
    </div>
  );
};

export default ChatInput;
