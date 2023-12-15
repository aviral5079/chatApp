// File: App.js
import React, { useState, useEffect } from "react";
import FileInput from "./components/FileInput";
import ChatHistory from "./components/ChatHistory";
import ChatFeed from "./components/ChatFeed";
import ChatInput from "./components/ChatInput";
import Header from "./components/Header";

const App = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("");

  const handleClick = (title) => {
    setCurrentTitle(title);
  };

  const createNewChat = (e) => {
    e.preventDefault();
    setMessage(null);
    setValue("");
    setCurrentTitle(null);
    console.log(previousChats);
  };

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch("http://localhost:8000/assist", options);
      const data = await response.json();
      setMessage(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!currentTitle && value && message) {
      setCurrentTitle(value);
    }

    if (currentTitle && value && message) {
      setPreviousChats((prevChats) => [
        ...prevChats,
        { title: currentTitle, role: "user", content: value },
        { title: currentTitle, role: message.role, content: message.content },
      ]);
    }
  }, [message, currentTitle]);

  const currentChats = previousChats.filter(
    (prevChat) => prevChat.title === currentTitle
  );

  const previousChatTitles = Array.from(
    new Set(previousChats.map((previousChat) => previousChat.title))
  );

  return (
    <div className="App">
      <section className="side-bar">
        <FileInput createNewChat={createNewChat} />
        <ChatHistory
          previousChatTitles={previousChatTitles}
          handleClick={handleClick}
        />
      </section>

      <section className="main">
        <Header text={currentTitle} />
        <ChatFeed currentChats={currentChats} />
        <ChatInput
          value={value}
          setValue={setValue}
          getMessages={getMessages}
        />
      </section>
    </div>
  );
};

export default App;
