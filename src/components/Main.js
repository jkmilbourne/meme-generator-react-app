import React, { useState, useEffect } from "react";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  // Call api to run at render only and save to state allMemes in json format
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  // click handler for button
  function handleClick(event) {
    event.preventDefault();
    // get random num between 0 and 99
    let num = Math.floor(Math.random() * allMemes.length);
    // set state of meme with random image from api call
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: allMemes[num].url,
      };
    });
  }

  // handle change to update state of text inputs
  function handleChange(event) {
    setMeme((prevState) => {
      const { name, value } = event.target;
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <main className="container">
      {/* main form */}
      <form className="form">
        {/* for centering the text boxes with flex */}
        <div className="flex">
          {/* top text box */}
          <input
            type={"text"}
            name="topText"
            id="topText"
            value={meme.topText}
            onChange={handleChange}
            className="form--top-text input"
            placeholder="Top Text"
          />
          {/* bottom text box */}
          <input
            type={"text"}
            name="bottomText"
            id="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            className="form--bottom-text input"
            placeholder="Bottom Text"
          />
        </div>
        {/* button to rerender meme img with random image image */}
        <button className="form--btn btn" onClick={handleClick}>
          Get a new meme image 🖼
        </button>
        <div className="form--div">
          <img
            className="form--img"
            id="formImg"
            src={meme.randomImage}
            alt=""
          />
          {/* text boxes that use state to display the top and bottom meme texts dynamicly */}
          <p className="meme-text top-text">{meme.topText}</p>
          <p className="meme-text bottom-text">{meme.bottomText}</p>
        </div>
      </form>
    </main>
  );
}
