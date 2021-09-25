import React, { useState } from "react";
//Import components
import CreateTweet from "./components/CreateTweet";
import TweetList from "./components/TweetList";

function App() {
  //State
  const [name, setName] = useState("Dev Ed");
  const [textInput, setTextInput] = useState("");
  const [tweets, setTweets] = useState([]);

  return (
    <div className="box">
      <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets} />
      <TweetList name={name} tweets={tweets} setTweets={setTweets} />
    </div>
  );
}

export default App;
