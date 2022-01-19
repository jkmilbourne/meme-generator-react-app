import Logo from "../images/trollFace.svg";

export default function Main() {
  return (
    <main className="container">
      <form className="form">
        <div className="flex">
          <input
            type={"text"}
            name="topText"
            id="topText"
            className="form--top-text input"
            placeholder="Top Text"
          />
          <input
            type={"text"}
            name="bottomText"
            id="bottomText"
            className="form--bottom-text input"
            placeholder="Bottom Text"
          />
        </div>
        <button className="form--btn btn">Get a new meme image 🖼</button>
        <img className="form--img" src={Logo} alt="" />
      </form>
    </main>
  );
}
