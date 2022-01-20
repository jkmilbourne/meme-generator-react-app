import React from "react";
// import Logo from "../images/trollFace.svg";
import memesData from "./memesData";

export default function Main() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);
  function handleClick(event) {
    event.preventDefault();
    let num = Math.floor(Math.random() * memesData.data.memes.length);
    setMeme(prevState => {
      return {
        ...prevState,
        randomImage: allMemeImages.data.memes[num].url,
      };
    })
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
            className="form--top-text input"
            placeholder="Top Text"
          />
          <input
            type={"text"}
            name="bottomText"
            id="bottomText"
            // value={meme.bottomText}
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
