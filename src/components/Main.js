import React from "react";
import memesData from "./memesData";

export default function Main() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  console.log(meme.topText, meme.bottomText);

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function handleClick(event) {
    event.preventDefault();
    let num = Math.floor(Math.random() * memesData.data.memes.length);
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: allMemeImages.data.memes[num].url,
      };
    });
  }

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
      <form className="form">
        <div className="flex">
          <input
            type={"text"}
            name="topText"
            id="topText"
            // value={meme.topText}
            onChange={handleChange}
            className="form--top-text input"
            placeholder="Top Text"
          />
          <input
            type={"text"}
            name="bottomText"
            id="bottomText"
            // value={meme.bottomText}
            onChange={handleChange}
            className="form--bottom-text input"
            placeholder="Bottom Text"
          />
        </div>
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
          <p className="meme-text top-text">{meme.topText}</p>
          <p className="meme-text bottom-text">{meme.bottomText}</p>
        </div>
      </form>
    </main>
  );
}
