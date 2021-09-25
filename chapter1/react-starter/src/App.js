import React, { useState, useEffect } from "react";
//Import components
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {

  useEffect(() => {
    console.log("we run a function yeyy 😃");
  }, []);

  //State
  const [name, setName] = useState("Dev Ed");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  return (
    <div className="box">
      <h1 className="title">TWITTER LIGHT</h1>
      <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets} />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;
