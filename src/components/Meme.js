import React, { useState } from "react";
import "../styles/Meme.css";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomMeme: "https://i.imgflip.com/1e7ql7.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  function getMemeImage() {
    const randomMeme = allMemes;
    let newMeme = randomMeme[Math.floor(Math.random() * randomMeme.length)];
    const url = newMeme.url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomMeme: url,
    }));
  }

  return (
    <div>
      <main>
        <form className="form">
          <input
            type="text"
            id="second-line"
            className="form-input"
            name="bottomText"
            placeholder="First Line"
          ></input>
          <input
            type="text"
            id="second-line"
            className="form-input"
            name="bottomText"
            placeholder="Second Line"
          ></input>
          <button onClick={getMemeImage} className="form-button">
            Get a new meme image
          </button>
        </form>
        <div>
          <h1>meme Here</h1>
          <img src={meme.randomMeme} alt="meme" />
        </div>
      </main>
    </div>
  );
}
