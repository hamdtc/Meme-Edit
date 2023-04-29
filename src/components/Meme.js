import React, { useState } from "react";
import "../styles/Meme.css";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomMeme: "https://i.imgflip.com/1e7ql7.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomMeme = allMemes;
    let newMeme = randomMeme[Math.floor(Math.random() * randomMeme.length)];
    const url = newMeme.url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomMeme: url,
    }));
  }

  function handleText(event) {
    const { name, value } = event.target;
    setMeme((prevText) => {
      return {
        ...prevText,
        [name]: value,
      };
    });
  }

  return (
    <div className="meme--section">
      <div className="form">
        <input
          type="text"
          name="topText"
          onChange={handleText}
          value={meme.topText}
          placeholder="Top text"
          className="form-input"
        />
        <input
          type="text"
          name="bottomText"
          onChange={handleText}
          value={meme.bottomText}
          placeholder="Bottom text"
          className="form-input"
        />
        <button onClick={getMemeImage} className="form-button">
          Get a new meme image{" "}
        </button>
      </div>

      <div className="img-div">
        <h1 className="meme--text top">{meme.topText}</h1>
        <img src={meme.randomMeme} alt="meme" className="meme--img" />
        <h1 className="meme--text bottom">{meme.bottomText}</h1>
      </div>
    </div>
  );
}
