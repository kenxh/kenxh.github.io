// import { Header, Footer } from "./components";
import ReactMarkdown from "react-markdown";
import { lesson_one } from "./data/markdown";
import selfPhoto from './components/image13540.jpg';
import selfPhoto2 from './components/IMG_20210207_180215_373.jpg';
import selfPhoto3 from './components/IMG_20210206_215900_601.jpg';
import SocialMedia from "./SocialMedia"
import React, { Component } from "react";

const App = () => {
  const fun_facts = ["I love watching action movies", 
  "I love listening to music no matter what I'm doing", 
  "I used to work as a host at On the Border",
  "My favorite movies are Captain America: The Winter Soldier, Scream, and Clue",
  "My favorite TV shows are Hannibal, Community, Parks & Rec, Schitt's Creek, and Buffy the Vampire Slayer",
  "I came to UNC to be a Mathematics major before I switched into Computer Science"];
  const makeList = () => {
    return (
      <ul>
        {fun_facts.map((fact) => {
          return <li>{fact}</li>;
        })}
      </ul>
    )
  };

  return (
    <div className="home">
      {/* <Header /> */}
      <h2>Hi! My name is Kendall Howard.</h2>
      <h3>I'm currently a 
          freshman at UNC studying computer science. Some of fun facts about me:</h3>
        {makeList()} 
       <div class="container">
        <div id="content">{/* <ReactMarkdown source={lesson_one} /> */}</div>
        <div class="image">
          <img src={ selfPhoto3 } width="375" alt=""/>
          <img src={ selfPhoto } width="375" alt=""/>
          <img src={ selfPhoto2 } width="375" alt=""/></div> 
        </div>
        <h3>
        <SocialMedia />
        </h3>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
